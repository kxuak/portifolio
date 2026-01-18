import './card.scss'
import type { PropsWithChildren } from "react";

import IconApi from '../../../public/IconApi/Api.svg?react'
import IconBootstrap from '../../../public/IconBootstrap/Bootstrap.svg?react'
import IconFigma from '../../../public/IconFigma/Figma.svg?react'
import IconJavascript from '../../../public/IconJavascript/javascript.svg?react'
import IconReact from '../../../public/IconReact/React.svg?react'
import IconTailwind from '../../../public/IconTailwind/Tailwind.svg?react'
import IconNode from '../../../public/IconNode/Node.svg?react';
import IconTypescript from '../../../public/IconTypescript/Typescript.svg?react'

type CardProps = {
    title: string;
    icon?: 'api' | 'bootstrap' | 'figma' | 'javascript' | 'react' | 'tailwind' | 'node' | 'typescript';
}

const Icon = ({icon}: {icon: CardProps["icon"]}) => {
    if(icon === "api") {
        return <IconApi/>
    }
    if(icon === "bootstrap") {
        return <IconBootstrap/>
    }
    if(icon === "figma") {
        return <IconFigma/>
    }
    if(icon === "javascript") {
        return <IconJavascript/>
    }
    if(icon === "react") {
        return <IconReact/>
    }
    if(icon === "tailwind") {
        return <IconTailwind/>
    }
    if(icon === "node") {
        return <IconNode/>
    }
    if(icon === "typescript") {
        return <IconTypescript/>
    }

    return null
}

const Card = ({
    title,
    icon,
    children
}: PropsWithChildren<CardProps>) => {
  return (
    <div className='Card'>
        <Icon icon={icon} />
        <h1 className='titleCard'>{title}</h1>
        <p className='conteudoCard'>{children}</p>
    </div>
  )
}

export default Card