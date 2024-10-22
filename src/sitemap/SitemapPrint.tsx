import { renderToString } from 'react-dom/server'
import { SitemapExportData, SitemapExportWithProjectData, SitemapPdfExportBackendOptions } from './generalTypes'
import HtmlPdfWrapper from './HtmlPdfWrapper'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import TitlePage from './TitlePage'
import StructurePage from './StructurePage'
import SitemapPages from './SitemapPages/SitemapPages'
import ProjectInfo from './ProjectInfo'
import EstimatesPage from './EstimatesPage'
import { PrintContextProvider } from './PrintContext'

const SitemapPrint = ({
  sitemap,
  options,
}: {
  sitemap: SitemapExportData
  options: SitemapPdfExportBackendOptions
}) => {
  return (
    <HtmlPdfWrapper>
      <PrintContextProvider sitemap={sitemap} options={options}>
        <TitlePage />
        <ProjectInfo />
        <StructurePage />
        <EstimatesPage />
        <SitemapPages />
      </PrintContextProvider>
    </HtmlPdfWrapper>
  )
}

const defaultOptions: SitemapPdfExportBackendOptions = {
  projectInfo: true,
  structure: true,
  pages: true,
  wireframes: true,
  pageDescriptions: true,
  content: true,
  seo: true,
  includeEmptyPages: true,
  estimates: true,
}

const writeFile = (fileName: string, content: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        reject(err)
      }
      resolve(void 0)
    })
  })
}

const execPromise = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout) => {
      if (err) {
        reject(err)
      }
      resolve(stdout)
    })
  })
}

export default async (
  sitemap: SitemapExportWithProjectData,
  options: SitemapPdfExportBackendOptions = defaultOptions,
) => {
  const cwd = process.env.CWD ?? path.resolve(__dirname, '..')
  const html = renderToString(<SitemapPrint sitemap={convertExportData(sitemap)} options={options} />)
  const fileName = Date.now() + Math.random().toString(36).substring(7)
  await writeFile(`${cwd}/${fileName}.html`, html)
  await execPromise(`cp ${cwd}/src/tw.css ${cwd}`)
  await execPromise(`vivliostyle build ${cwd}/${fileName}.html -o ${cwd}/${fileName}.pdf`)
  const pdf = fs.createReadStream(`${cwd}/${fileName}.pdf`)
  // fs.unlink(`${cwd}/${fileName}.html`, (err) => {
  //   if (err) console.log('cant remove file: ', `${cwd}/${fileName}.html`, err)
  // })
  setTimeout(() => {
    fs.unlink(`${cwd}/${fileName}.pdf`, (err) => {
      if (err) console.log('cant remove file: ', `${cwd}/${fileName}.pdf`, err)
    })
  }, 60000)

  return pdf
}

function convertExportData(data: SitemapExportWithProjectData): SitemapExportData {
  const [sitemap] = data.Sitemap
  return {
    title: sitemap.title,
    projectTitle: data.Project[0]?.title,
    projectDescription: data.Project[0]?.description,
    currency: data.Project[0]?.currency,
    estimates: data.Estimate,
    sitemapPageEstimates: data.SitemapPageEstimate,
    sitemapPages: data.SitemapPage.map((page) => ({
      ...page,
      blocks: data.SitemapPageBlock.filter((block) => block.sitemapPageId === page.id).map((block) => ({
        ...block,
        wireframePrimitives: data.WireframePrimitive.filter((primitive) => primitive.sitemapPageBlockId === block.id),
      })),
      labels: data.SitemapPageLabel.filter((label) => label.sitemapPageId === page.id)
        .map((label) => data.Label.find((l) => l.id === label.labelId))
        .filter(Boolean),
      estimates: data.SitemapPageEstimate.filter((estimate) => estimate.sitemapPageId === page.id).map((estimate) => ({
        estimate: data.Estimate.find((e) => e.id === estimate.estimateId),
        amount: estimate.amount,
      })),
    })),
  }
}
