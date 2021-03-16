import React from 'react'
import {Box, Button, Flex, Img, Heading, Stack, Text} from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
    title: string
    subtitle: string
    image: string
    ctaLink: string
    ctaText: string
}

export const Hero: React.FC<Props> = (props) => {
    const {title, subtitle, image, ctaLink, ctaText, ...rest} = props

    return <Flex
        align="center"
        justify={{base: 'center', md: 'space-around', xl: 'space-between'}}
        direction={{base: 'column-reverse', md: 'row'}}
        pt={8}
        mb={16}
        {...rest}
    >
        <Stack
            spacing={4}
            w={{base: '80%', md: '40%'}}
            align={['center', 'center', 'flex-start', 'flex-start']}
        >
            <Heading
                as="h1"
                size="xl"
                fontWeight="bold"
                color="primary.800"
                textAlign={['center', 'center', 'left', 'left']}
            >
                {title}
            </Heading>
            <Heading
                as="h2"
                size="md"
                color="primary.800"
                opacity="0.8"
                fontWeight="normal"
                lineHeight={1.5}
                textAlign={['center', 'center', 'left', 'left']}
            >
                {subtitle}
            </Heading>
            <Link href={ctaLink}>
                <Button
                    borderRadius="8px"
                    variant="solid"
                    colorScheme="green"
                    lineHeight="1"
                >
                    {ctaText}
                </Button>
            </Link>
        </Stack>
        <Box w={{base: '80%', sm: '60%', md: '50%'}} mb={{base: 12, md: 0}}>
            <Img src={image} size="100%" rounded="1rem" shadow="2xl"/>
        </Box>
    </Flex>
}
