import { renderToString } from 'react-dom/server'
import { SitemapExportData, SitemapExportWithProjectData, SitemapPdfExportBackendOptions } from './generalTypes'
import HtmlPdfWrapper from './HtmlPdfWrapper'
import fs from 'fs'
import { execSync } from 'child_process'
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

export default async (
  sitemap: SitemapExportWithProjectData,
  options: SitemapPdfExportBackendOptions = defaultOptions,
) => {
  const cwd = process.cwd()
  const html = renderToString(<SitemapPrint sitemap={convertExportData(sitemap)} options={options} />)
  const fileName = Date.now() + Math.random().toString(36).substring(7)
  fs.writeFileSync(`${fileName}.html`, html)
  execSync(`cp ${cwd}/src/tw.css ${cwd}`)
  execSync(`cp ${cwd}/src/tw.css ${cwd}`)
  execSync(`vivliostyle build test.html -o ${fileName}.pdf`)
  const pdf = fs.readFileSync(`${fileName}.pdf`)
  execSync(`rm ${fileName}.html`)
  execSync(`rm ${fileName}.pdf`)

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
