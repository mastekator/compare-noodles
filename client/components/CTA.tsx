import React from 'react'
import {useTranslation} from 'next-i18next'

import {Link as ChakraLink, Button, Text} from '@chakra-ui/react'
import {Container} from './Container'

const CTA: React.FC = () => {
    const {t} = useTranslation('cta')

    return <Container
        flexDirection="row"
        position="relative"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        py={2}
    >
        <Text>{t('description')}</Text>
        <ChakraLink
            href="/"
            flexGrow={3}
            mx={2}
        >
            <Button width="100%" variant="solid" colorScheme="green">
                {t('compare')}
            </Button>
        </ChakraLink>
    </Container>
}

export default CTA
