import React from 'react'
import {
    Container,
    Header,
    Content,
    Description,
    Footer,
    ButtonContainer,
    StyledButton,
    SkipButton,
} from './style'

const Component = (props: any) => {
    return (
        <Container>
            <Header>
                {props.headline}
            </Header>
            <Content>
                <Description>
                    {props.description}
                </Description>
            </Content>
            <Footer>
                <ButtonContainer>
                    <StyledButton onClick={props.onSubmit}>
                        {props.submitLabel}
                    </StyledButton>
                    <SkipButton onClick={props.onCancel}>
                        {props.cancelLabel}
                    </SkipButton>
                </ButtonContainer>
            </Footer>
        </Container>
    )
}

export default Component
