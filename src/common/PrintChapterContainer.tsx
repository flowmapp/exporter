import { PropsWithChildren } from 'react'

type Props = {
  title?: React.ReactNode
  footer?: React.ReactNode
}

const PrintChapterContainer: React.FC<PropsWithChildren<Props>> = ({ title, footer, children }) => {
  return (
    <div className="page">
      <table>
        <thead>
          <tr>
            <td className="table-header-group headerLeft">{title ?? ''}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="table-footer-group footerLeft">{footer ?? ''}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default PrintChapterContainer
