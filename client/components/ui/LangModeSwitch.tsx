import React from 'react'
import {IoLanguage} from 'react-icons/io5'
import {IconButton} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export const LangModeSwitch: React.FC = (props) => {
    const router = useRouter()

    return <Link
        href={router.pathname}
        locale={router.locale === 'en' ? 'ru' : 'en'}
    >
        <IconButton
            aria-label={'Switch language'}
            variant="ghost"
            icon={<IoLanguage/>}
        />
    </Link>
}
