import React, { CSSProperties } from 'react'
import {
  isPrimitiveButton,
  isPrimitiveCircle,
  isPrimitiveIcon,
  isPrimitiveImage,
  isPrimitiveInput,
  isPrimitiveLine,
  isPrimitiveRectangle,
  isPrimitiveText,
  Primitive,
  PrimitiveButton,
  PrimitiveCircle,
  PrimitiveIcon,
  PrimitiveImage,
  PrimitiveInput,
  PrimitiveLine,
  PrimitiveRectangle,
  PrimitiveText,
  SitemapPageBlockType,
} from '../generalTypes'
import { compareIndex } from 'src/common/sortOrder'
import cn from 'classnames'
import { FaIcon } from 'src/common/FaIcon/FaIcon'

type Props = {
  blocks: SitemapPageBlockType[]
}

const WireFramesContent: React.FC<Props> = ({ blocks }) => {
  return (
    <div style={{ marginBottom: `${32 / pixelsInMM}mm` }}>
      {blocks.map((block) => {
        const blockHeight = getBlockHeight(block)
        const realHeight = Math.min(blockHeight, 250)
        const transform = `scale(${realHeight / blockHeight})`
        return (
          <div key={block.id} className="break-inside-avoid" style={{ height: `${realHeight}mm` }}>
            <div
              style={{
                height: `${blockHeight}mm`,
                position: 'relative',
                width: '18cm',
                transform,
                transformOrigin: 'top left',
              }}
            >
              <BlockPrimitives block={block} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WireFramesContent

const blockWidthInPixels = 1080
const blockWidthInMM = 180
const pixelsInMM = blockWidthInPixels / blockWidthInMM

const BlockPrimitives: React.FC<{ block: SitemapPageBlockType }> = ({ block }) => {
  const primitives = block.wireframePrimitives?.sort(compareIndex)

  if (!primitives) return null

  return (
    <>
      <div
        style={{
          opacity: `${block?.backgroundOpacity}%`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 12,
          width: '18cm',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div className="w-full h-full relative overflow-hidden">
          {primitives.map((primitive) => (
            <div key={primitive.id} style={{ ...getDefaultStyle(primitive) }}>
              <BlockPrimitive primitive={primitive} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const BlockPrimitive: React.FC<{ primitive: Primitive }> = ({ primitive }) => {
  if (isPrimitiveText(primitive)) {
    return <TextPrimitive primitive={primitive} />
  }
  if (isPrimitiveImage(primitive)) {
    return <ImagePrimitive primitive={primitive} />
  }
  if (isPrimitiveRectangle(primitive)) {
    return <RectanglePrimitive primitive={primitive} />
  }
  if (isPrimitiveCircle(primitive)) {
    return <CirclePrimitive primitive={primitive} />
  }
  if (isPrimitiveLine(primitive)) {
    return <LinePrimitive primitive={primitive} />
  }
  if (isPrimitiveButton(primitive)) {
    return <ButtonPrimitive primitive={primitive} />
  }
  if (isPrimitiveInput(primitive)) {
    return <InputPrimitive primitive={primitive} />
  }
  if (isPrimitiveIcon(primitive)) {
    return <IconPrimitive primitive={primitive} />
  }

  console.warn(`unknown primitive ${primitive.type}`)

  return null
}

const IconPrimitive: React.FC<{ primitive: PrimitiveIcon }> = ({ primitive }) => {
  const { params } = primitive
  const isV2Icon = params.icon?.includes('/')

  const isEmoji = !params?.icon?.includes('fa') && !isV2Icon

  const { width, height } = primitive

  const baseSize = Math.min(width, height)
  const iconSize = Math.max(baseSize, 40)

  const iconContent = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      {Boolean(params.icon) && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {params.icon && <FaIcon color={params.color} icon={params.icon} size={iconSize} />}
          {isEmoji && <EmojiIcon primitive={primitive} />}
          {isV2Icon && params.icon && <V2Icon iconName={params.icon} />}
        </div>
      )}
    </div>
  )

  return (
    <div
      style={{
        minWidth: `${20 / pixelsInMM}mm`,
        minHeight: `${20 / pixelsInMM}mm`,
      }}
    >
      {iconContent}
    </div>
  )
}

const SPRITE_NAME = 'sprite-all-v2'

export const V2Icon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconSpriteId = `#${SPRITE_NAME}_${iconName}`

  return (
    <svg width={'100%'} height={'100%'}>
      <use href={iconSpriteId} />
    </svg>
  )
}

const EmojiIcon: React.FC<{ primitive: PrimitiveIcon }> = ({ primitive }) => {
  const { width, height } = primitive

  return (
    <div
      style={{
        fontSize: `${Math.min(width, height) / pixelsInMM}mm`,
        userSelect: 'none',
      }}
    >
      {primitive.params.icon}
    </div>
  )
}

const LinePrimitive: React.FC<{ primitive: PrimitiveLine }> = ({ primitive }) => {
  const { color } = primitive.params
  if (!primitive.params.points) {
    return <></>
  }

  const [[x1, y1], [x2, y2]] = primitive.params.points
  const { width: thickness } = primitive

  const strokeColor = color ?? '#1f1f1f'

  return (
    <>
      <svg width="18cm" height="10cm" style={{ position: 'absolute' }} preserveAspectRatio="none">
        <g id={primitive.id}>
          <line
            x1={`${x1 / pixelsInMM}mm`}
            y1={`${y1 / pixelsInMM}mm`}
            x2={`${x2 / pixelsInMM}mm`}
            y2={`${y2 / pixelsInMM}mm`}
            stroke={strokeColor}
            strokeWidth={`${thickness / pixelsInMM}mm`}
          />
        </g>
      </svg>
    </>
  )
}

const InputPrimitive: React.FC<{ primitive: PrimitiveInput }> = ({ primitive }) => {
  const width = primitive.width / pixelsInMM

  const { isDisabled } = primitive.params

  const border = isDisabled ? '1px solid #E0E0E0' : '1px solid #1F1F1F'
  const color = isDisabled ? '#999999' : 'black'

  const style = {
    width: `${width}mm`,
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    border,
    color,
    fontSize: `${16 / pixelsInMM}mm`,
    height: `${40 / pixelsInMM}mm`,
  }

  return (
    <div
      style={{
        maxWidth: 'none',
        whiteSpace: 'nowrap',
        justifyContent: 'flex-start',
        minWidth: 0,
        paddingLeft: `${20 / pixelsInMM}mm`,
        paddingRight: `${20 / pixelsInMM}mm`,
        overflow: 'hidden',
        ...style,
      }}
    >
      {primitive.params.title ?? primitive.params.placeholder}
    </div>
  )
}

const CirclePrimitive: React.FC<{ primitive: PrimitiveCircle }> = () => {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        borderRadius: '100%',
        width: '100%',
        height: '100%',
      }}
    />
  )
}

const RectanglePrimitive: React.FC<{ primitive: PrimitiveRectangle }> = () => {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
        borderRadius: `${8 / pixelsInMM}mm`,
        width: '100%',
        height: '100%',
      }}
    />
  )
}

const ButtonPrimitive: React.FC<{ primitive: PrimitiveButton }> = ({ primitive }) => {
  const width = primitive.width / pixelsInMM

  return (
    <div>
      <div
        style={{
          ...getButtonStyle(primitive.params),
          maxWidth: 'none',
          width: `${width}mm`,
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          minWidth: 0,
          paddingLeft: `${20 / pixelsInMM}mm`,
          paddingRight: `${20 / pixelsInMM}mm`,
          overflow: 'hidden',
        }}
      >
        {primitive.params.title}
      </div>
    </div>
  )
}

function getButtonStyle(params: PrimitiveButton['params']): CSSProperties {
  const { backgroundColor, borderRadius, isDisabled } = params

  const isFilled = backgroundColor === 'black'
  const isOutline = backgroundColor === 'white'

  const style: CSSProperties = {
    backgroundColor: '#1F1F1F',
    color: 'white',
    border: `${2 / pixelsInMM}mm solid #1F1F1F`,
    fontSize: `${16 / pixelsInMM}mm`,
    height: `${40 / pixelsInMM}mm`,
  }

  // filled
  if (isFilled) {
    if (isDisabled) {
      style.backgroundColor = '#999999'
      style.color = 'white'
      style.border = `${2 / pixelsInMM}mm solid #999999`
    } else {
      style.backgroundColor = '#1F1F1F'
      style.color = 'white'
    }
  }

  // outline
  if (isOutline) {
    if (isDisabled) {
      style.border = `${2 / pixelsInMM}mm solid #999999`
      style.backgroundColor = 'white'
      style.color = '#999999'
    } else {
      style.border = `${2 / pixelsInMM}mm solid #1F1F1F`
      style.backgroundColor = 'white'
      style.color = '#1F1F1F'
    }
  }

  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${borderRadius === 0 ? 8 / pixelsInMM : 20 / pixelsInMM}mm`,

    ...style,
  }
}

const TextPrimitive: React.FC<{ primitive: PrimitiveText }> = ({ primitive }) => {
  const { params } = primitive
  const { width } = getPrimitiveSize(primitive)

  return (
    <div
      dangerouslySetInnerHTML={{ __html: params.title }}
      className={cn(
        'whitespace-pre-wrap font-medium min-w-5 break-words',
        {
          'text-left': params.textAlign === 'left',
          'text-center': params.textAlign === 'center',
          'text-right': params.textAlign === 'right',
        },
        {
          'text-p-xs': params.size === 'xs',
          'text-p-s tracking-regular': params.size === 's',
          'text-p-m tracking-tight': params.size === 'm',
          'text-p-l tracking-tighter': params.size === 'l',
          'text-p-xl tracking-tightest': params.size === 'xl',
        },
      )}
      style={{
        color: params.color,
        width: `${width / pixelsInMM}mm`,
      }}
    />
  )
}

function getStylesImage(params: PrimitiveImage['params']): CSSProperties {
  return {
    border: `${1 / pixelsInMM}mm solid #E0E0E0`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderRadius: `${8 / pixelsInMM}mm`,
    opacity: params.opacity,
    backgroundColor: 'white',
    overflow: 'hidden',
    userSelect: 'none',
  }
}

const getImage = (primitive: PrimitiveImage): string | null | undefined => {
  return primitive.params.src
}

const ImagePrimitive: React.FC<{ primitive: PrimitiveImage }> = ({ primitive }) => {
  const image = getImage(primitive)

  return (
    <div className="relative overflow-hidden w-full h-full">
      {!image && (
        <div
          className="absolute inline-block w-full h-full rounded-[1mm] border border-neutral-gray-120 bg-white"
          style={{
            background: `repeating-linear-gradient(
              135deg,
              #0000001f,
              #0000001f ${1 / pixelsInMM}mm,
              white ${1 / pixelsInMM}mm,
              white ${20 / pixelsInMM}mm
            )`,
          }}
        />
      )}

      {image && (
        <img
          src={image}
          style={{
            ...getStylesImage(primitive.params),
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: `${primitive.params.opacity ?? 100}%`,
          }}
        />
      )}
    </div>
  )
}

function getDefaultStyle(primitive: Primitive): CSSProperties {
  const { width, height } = getPrimitiveSize(primitive)

  const { x, y } = isPrimitiveLine(primitive) ? { x: 0, y: 0 } : primitive

  return {
    display: 'inline-block',
    position: 'absolute',
    boxSizing: 'content-box',
    left: `${x / pixelsInMM}mm`,
    top: `${y / pixelsInMM}mm`,
    width: `${width / pixelsInMM}mm`,
    height: `${height / pixelsInMM}mm`,
  }
}

function getPrimitiveSize(primitive: Primitive) {
  const { width, height } = primitive
  if (isPrimitiveText(primitive)) {
    const { isWidthFixed } = primitive.params
    if (isWidthFixed) return { width, height }
    return { width: blockWidthInPixels - primitive.x, height }
  }

  return { width, height }
}

function getBlockHeight(block: SitemapPageBlockType) {
  if (block.height) return block.height / pixelsInMM

  if (block.params?.migratedHeight) {
    return block.params?.migratedHeight / pixelsInMM
  }

  return 200 / pixelsInMM
}
