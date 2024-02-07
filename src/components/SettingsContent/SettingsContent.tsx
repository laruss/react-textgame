import { styled, Typography } from '@mui/material';

const Container = styled('div')(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;
  justify-content: space-between;

  ${theme.breakpoints.down('sm')} {
    min-height: 80vh;
    justify-content: flex-start;
  }

  ${theme.breakpoints.up('md')} {
    width: 100%;
    overflow: auto;
  }
`);

const SettingsBody = styled('div')(({ theme }) => `
  font: inherit;
  font-size: 20px;
  cursor: default;
  overflow: hidden;
  display: flex;
  max-width: 100%;
  gap: 10%;
  padding: 3em 3em 2em 3em;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${theme.breakpoints.down('md')} {
    gap: 0;
    padding: 0
  }
`);

const HeaderText = styled('div')`
  display: flex;
  padding-left: 30rem;
  padding-right: 30rem;
  text-align: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  cursor: default;
`;

const About = styled('div')`
  width: 100%;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding-bottom: 30px;
`;

const H3 = styled('div')`
  padding-top: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  min-width: 400px;
`;

const LeftSide = styled('div')(({ theme }) => `
  display: flex;
  flex-direction: column;
  width: 50%;
  overflow: hidden;
  text-align: justify;
  line-height: 110%;

  ${theme.breakpoints.down('md')} {
    width: 100%;
    overflow: auto;
  }

  ${theme.breakpoints.down('sm')} {
    overflow-y: auto;
    overflow-x: hidden;
  }
`);

const RightSide = styled('div')(({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.breakpoints.down('md')} {
    visibility: hidden;
    width: 0;
  }
`);

const P = styled('p')`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const TextContainer = styled('div')(({ theme }) => `
  overflow: hidden;
  max-width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;

  ${theme.breakpoints.between('sm', 'md')} {
    max-height: 500px;
    min-height: 500px;
    overflow: auto;
  }

  ${theme.breakpoints.down('sm')} {
    min-height: 600px;
    overflow-y: hidden;
    overflow-x: auto;
  }
`);

const SettingsContent = () => {
    return (
        <Container>
            <HeaderText>Settings</HeaderText>
            <SettingsBody className='settings-body'>
                <LeftSide className='left-side'>
                    <About>About</About>
                    <H3>Text Game Engine</H3>
                    <div>
                        <P><strong>Version: </strong><a href='https://github.com/laruss/react-textgame' target='_blank'>0.3 beta</a></P>
                        <P><strong>Author: </strong> @laruss <a href='https://github.com/laruss' target='_blank'>github link</a> | <a href='https://t.me/laruss5' target='_blank'>telegram</a></P>
                        <TextContainer>
                            React Text Game Engine is a powerful tool for creating interactive stories and games. It allows developers to create branching narratives and dynamic game mechanics using the popular React framework. The engine's intuitive point-and-click interface makes it easy to create complex and interactive elements without the need for extensive programming knowledge. Additionally, it provides a wide range of built-in features such as save and load functionality, modal-contents and other game components. Using this engine, developers can create engaging and immersive timely experiences for players while saving time and resources during the development process. With its flexibility and scalability, this engine is perfect for creating interactive fiction, visual novels, and other interactive content.
                        </TextContainer>
                    </div>
                </LeftSide>
                <RightSide className='right-side'>
                    <Typography>
                        Here will be your image
                    </Typography>
                </RightSide>
            </SettingsBody>
        </Container>
    );
};

export default SettingsContent;