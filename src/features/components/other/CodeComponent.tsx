import { CopyBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: left;
`;

const CodeComponent = ({code, lang='jsx'}: {code: string, lang?: 'jsx'|'shell'}) => {
    return (
        <Container>
            <CopyBlock
                text={code}
                language={lang}
                showLineNumbers
                theme={dracula}
            />
        </Container>
    )
};

export default CodeComponent;