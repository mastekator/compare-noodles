import React from 'react'
import {useTranslation} from 'next-i18next'

import {Button, Text, Flex} from '@chakra-ui/react'
import Link from 'next/link'

const CTA: React.FC = () => {
    const {t} = useTranslation('cta')

    return <Flex
        flexDirection="row"
        position="relative"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        py={2}
    >
        <Text>{t('description')}</Text>
        <Link href="/">
            <Button width="100%" variant="solid" colorScheme="green">
                {t('compare')}
            </Button>
        </Link>
    </Flex>
}

export default CTA
