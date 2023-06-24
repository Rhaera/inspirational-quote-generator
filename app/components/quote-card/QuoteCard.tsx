import React from "react";
import { Popover } from "@mui/material";
import { ModalCircularProgress, QuoteGeneratorInnerPopup, QuoteGeneratorPopup, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from "../quote-generator/QuoteGenerator";

interface QuoteCardProps {
    open: boolean,
    close: () => void
}

const style = {

}

export const QuoteCard = ({open, close}: QuoteCardProps, notShown: boolean) => {
    return (
        <Popover
        open={open}
        onClose={close}>
            <QuoteGeneratorPopup sx={style}>
                <QuoteGeneratorInnerPopup>
                    {(notShown) ?
                    <>
                        <ModalCircularProgress size={'8rem'} thickness={2.5}/>
                        <QuoteGeneratorTitle>
                            Creating your quote...
                        </QuoteGeneratorTitle>
                        <QuoteGeneratorSubTitle style={{marginTop: "20px"}}>
                            Come on and create
                            <br></br>
                            <span style={{fontSize: 26}}>A real dev</span>
                        </QuoteGeneratorSubTitle>
                    </> :
                    <>
                        
                    </>
                    }
                </QuoteGeneratorInnerPopup>
            </QuoteGeneratorPopup>
        </Popover>
    )
}
