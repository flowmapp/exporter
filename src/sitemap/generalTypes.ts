import { Estimate, SitemapPageEstimate } from './estimateTypes'

export type SitemapPdfExportBackendOptions = {
  projectInfo: boolean
  structure: boolean
  pages: boolean
  wireframes: boolean
  wireframesMobile: boolean
  pageDescriptions: boolean
  content: boolean
  seo: boolean
  includeEmptyPages: boolean
  estimates: boolean
}

export type SitemapExportWithProjectData = {
  Sitemap: { title: string }[]
  SitemapPage: SitemapPageType[]
  SitemapPageBlock: SitemapPageBlockType[]
  WireframePrimitive: Primitive[]
  SitemapPageLabel: { labelId: string; sitemapPageId: string }[]
  Label: LabelType[]
  Estimate: Estimate[]
  SitemapPageEstimate: SitemapPageEstimate[]
  Project: { title: string; description: string; currency: string; tax?: number }[]
  File: FileData[]
  WireframePrimitiveFile: { wireframePrimitiveId: string; fileId: string }[]
}

export type SitemapExportData = {
  title: string
  projectTitle: string
  projectDescription: string
  tax: number
  currency: string
  estimates: Estimate[]
  sitemapPageEstimates: SitemapPageEstimate[]
  // sitemapLines: SitemapLineType[]
  sitemapPages: SitemapPageType[]
}

export type SitemapLineType = {
  id: string
  sitemapId?: string
  departureId: string
  destinationId: string
  departureConnectorType: LineConnectorType
  destinationConnectorType: LineConnectorType
  color?: string
  curvature?: string
  text?: string
  textPosition?: number
}

export type LineConnectorType = 'main' | 'arrow fat' | 'round' | 'circle'

export type SitemapPageType = {
  id: string
  blocks: SitemapPageBlockType[]
  color: string
  displayType: SitemapPageDisplayType
  sortIndex: string
  groupName: GroupName
  description: string
  pageLink: string | null
  parentId: string | null
  shareRole: string | null
  isPreviewShared: boolean
  title: string
  projectId: string
  labels: LabelType[]
  cover: string | null
  sitemapPageId?: string
  sitemapId?: string
  seoTitle?: string | null
  seoFile?: SitemapPageFile | null
  seoDescription?: string | null
  seoSlug?: string | null
  file: SitemapPageFile | null
  estimates: SitemapPageEstimate[]
}

export type SitemapPageTreeItem = SitemapPageType & {
  children: SitemapPageTreeItem[]
}

type GroupName = 'main' | 'header' | 'footer'

type SitemapPageDisplayType = 'blocks' | 'cover' | 'customCover'

export type LabelType = {
  id: string
  color: string
  title: string
}

export type LabelValue = LabelType & {
  indeterminate?: boolean
}

export type LiveUpdateLabelType = {
  id: string
  labelId: string
  sitemapPageId: string
}

export enum LabelCategory {
  PROJECT = 'project',
  SYSTEM = 'system',
}

export type LabelsListType = {
  title: string
  type: LabelCategory
  content: LabelType[]
}

export type SitemapPageFile = {
  aliases: {
    original: string
    lg: string
    sm: string
    thumb: string
    xl: string
  }
  entity: string
  id: string
  originalName: string
  path: string
}

export type SitemapPageBlockType = {
  id: string
  title: string
  color: string
  sitemapPageId: string
  sortIndex: string
  justCreated?: boolean
  isDragged?: boolean
  wireframePrimitives?: Primitive[]
  params?: {
    template?: string
    v3MirgrationTS?: boolean
    migratedHeight?: number
  }
  height: number
  mobileHeight?: number
  description: string | null
  file?: SitemapPageFile
  backgroundOpacity?: number
  pinTo?: PinPosition | null
}

type PinPosition = 'top' | 'bottom'

export type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl'
type TextAlign = 'left' | 'center' | 'right'
type FontWeight = 500 | 700 | 900

type isDisabledValue = 1 | 0

export type PrimitiveParamsBackend = {
  title: string
  backgroundColor: string
  borderRadius: number
  state: string
  fontWeight: number
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent'
  color: string
  size: FontSize
  placeholder?: string
}

export type ImageAliases = {
  sm?: string
  lg?: string
  xl?: string
  original?: string
  thumb?: string
}

export type FileData = {
  aliases?: ImageAliases
  id?: string
}

type PrimitiveCommon = {
  id: string
  sitemapPageBlockId: string
  sortIndex: string
  x: number
  y: number
  width: number
  height: number
  params: Record<string, unknown>
  files?: FileData[]
  isMobile?: boolean
}

export type PrimitiveText = PrimitiveCommon & {
  type: 'text'
  params: {
    title: string
    fontWeight: FontWeight
    textAlign: TextAlign
    color: string
    size: FontSize
    isWidthFixed?: 0 | 1
    sitemapPageId?: string
  }
}

export function isPrimitiveText(primitive: Primitive): primitive is PrimitiveText {
  return primitive.type === 'text'
}

export type PrimitiveButton = PrimitiveCommon & {
  type: 'button'
  params: {
    title: string
    backgroundColor?: string
    borderRadius: number
    isDisabled?: isDisabledValue
    sitemapPageId?: string
  }
}

export function isPrimitiveButton(primitive: Primitive): primitive is PrimitiveButton {
  return primitive.type === 'button'
}

export type PrimitiveImage = PrimitiveCommon & {
  type: 'image'
  params: {
    opacity: number
    sitemapPageId?: string
    src?: string
  }
}

export function isPrimitiveImage(primitive: Primitive): primitive is PrimitiveImage {
  return primitive.type === 'image'
}

export type PrimitiveRectangle = PrimitiveCommon & {
  type: 'rectangle'
}

export function isPrimitiveRectangle(primitive: Primitive): primitive is PrimitiveRectangle {
  return primitive.type === 'rectangle'
}

export type PrimitiveCircle = PrimitiveCommon & {
  type: 'circle'
}

export function isPrimitiveCircle(primitive: Primitive): primitive is PrimitiveCircle {
  return primitive.type === 'circle'
}

export type PrimitiveIcon = PrimitiveCommon & {
  type: 'icon'
  params: {
    color?: string
    icon: string
    sitemapPageId?: string
  }
}

export function isPrimitiveIcon(primitive: Primitive): primitive is PrimitiveIcon {
  return primitive.type === 'icon'
}

export type PrimitiveInput = PrimitiveCommon & {
  type: 'input'
  params: {
    placeholder?: string
    title?: string
    isDisabled: isDisabledValue
  }
}

export function isPrimitiveInput(primitive: Primitive): primitive is PrimitiveInput {
  return primitive.type === 'input'
}

export type PrimitiveLine = PrimitiveCommon & {
  type: 'line'
  params: {
    points: [[number, number], [number, number]]
    color?: string
  }
}

export function isPrimitiveLine(primitive: Primitive): primitive is PrimitiveLine {
  return primitive.type === 'line'
}

export type Primitive =
  | PrimitiveText
  | PrimitiveButton
  | PrimitiveImage
  | PrimitiveRectangle
  | PrimitiveCircle
  | PrimitiveIcon
  | PrimitiveInput
  | PrimitiveLine
