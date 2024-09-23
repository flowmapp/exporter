import { renderToString } from 'react-dom/server'
import { SitemapExportData, SitemapPdfExportOptions } from './generalTypes'
import HtmlPdfWrapper from './HtmlPdfWrapper'
import fs from 'fs'
import { execSync } from 'child_process'
import TitlePage from './TitlePage'
import StructurePage from './StructurePage'
import SitemapPages from './SitemapPages/SitemapPages'

const SitemapPrint = ({ sitemap }: { sitemap: SitemapExportData; options: SitemapPdfExportOptions[] }) => {
  return (
    <HtmlPdfWrapper>
      <TitlePage sitemap={sitemap} />
      <StructurePage sitemap={sitemap} />
      <SitemapPages sitemap={sitemap} />
    </HtmlPdfWrapper>
  )
}

export default async (sitemap: SitemapExportData, { options }: { options: SitemapPdfExportOptions[] }) => {
  const cwd = process.cwd()
  const html = renderToString(<SitemapPrint sitemap={sitemap} options={options} />)
  fs.writeFileSync('test.html', html)
  execSync(`cp ${cwd}/src/tw.css ${cwd}`)
  execSync(`cp ${cwd}/src/tw.css ${cwd}`)
  execSync(`vivliostyle build test.html -o test.pdf`)
  // execSync(`rm test.html`)
  const pdf = fs.readFileSync('test.pdf')

  return pdf
}
