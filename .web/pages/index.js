/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts, UploadFilesContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { MoonIcon as LucideMoonIcon, SunIcon as LucideSunIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import {  } from "react-dropzone"
import { useDropzone } from "react-dropzone"
import NextLink from "next/link"
import NextHead from "next/head"



export function Iconbutton_5d4a20c282d066f2f46dc5923d99db7b () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) })} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>

<Fragment_ce8bcea548e7072af157110c53ab895c/>
</RadixThemesIconButton>
  )
}

export function Fragment_9017984ada32ffa55f5d2870ebd3c887 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Comp_ecd9540c41cad92927f85dca4239b2df () {
  const ref_upload1 = useRef(null); refs["ref_upload1"] = ref_upload1;
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const on_drop_0db64617fc696f4b223306ba8c435f5b = useCallback(e => setFilesById(filesById => {
    const updatedFilesById = Object.assign({}, filesById);
    updatedFilesById["upload1"] = e;
    return updatedFilesById;
  })
    , [addEvents, Event, filesById, setFilesById])
  const {getRootProps: yfrbenne, getInputProps: nlqkudsf}  = useDropzone(({ ["onDrop"] : on_drop_0db64617fc696f4b223306ba8c435f5b, ["accept"] : ({ ["application/xlsx"] : [".xlsx"] }), ["maxFiles"] : 1, ["multiple"] : true, ["id"] : "upload1" }));



  return (
    <>

<RadixThemesBox className={"rx-Upload"} css={({ ["border"] : "1px dotted blue", ["padding"] : "5em", ["textAlign"] : "center" })} id={"upload1"} ref={ref_upload1} {...yfrbenne()}>

<input type={"file"} {...nlqkudsf()}/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesButton css={({ ["color"] : "blue", ["background"] : "white", ["border"] : "1px solid blue" })}>

{"Select File"}
</RadixThemesButton>
<RadixThemesText as={"p"}>

{"Drag and drop files here or click to select files"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Button_640687212ca388d8d406019e88a78c8a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_f37cb40a99335170c8c4802a8ae26fdd = useCallback(((...args) => (addEvents([(Event("reflex___state____state.airline_ancillary_data_convert____airline_ancillary_data_convert____state.download_file", ({  }), ({  })))], args, ({  })))), [addEvents, Event])


  return (
    <RadixThemesButton onClick={on_click_f37cb40a99335170c8c4802a8ae26fdd}>

{"Download"}
</RadixThemesButton>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_bd4c022a8f796682aa6392e9d4c102e9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_9017984ada32ffa55f5d2870ebd3c887/>
</div>
  )
}

export function Errorboundary_2b1bb912bcf07317cdf69979a30cdca7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])


  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_bd4c022a8f796682aa6392e9d4c102e9/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<Iconbutton_5d4a20c282d066f2f46dc5923d99db7b/>
<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["minHeight"] : "85vh" })} direction={"column"} justify={"center"} gap={"5"}>

<RadixThemesHeading size={"9"}>

{"Welcome to Airline Ancillary Data convert!"}
</RadixThemesHeading>
<Comp_ecd9540c41cad92927f85dca4239b2df/>
<Button_46a2bf21cdce03172f4fc8713b440e5e/>
<Button_640687212ca388d8d406019e88a78c8a/>
<Fragment_efa4fa7563b726c932fd49a2f8f2a957/>
</RadixThemesFlex>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })}>

<Link_7bc499f266de6ff47946c9a12e326873/>
</RadixThemesFlex>
</RadixThemesContainer>
<NextHead>

<title>

{"Airlineancillarydataconvert | Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Button_46a2bf21cdce03172f4fc8713b440e5e () {
  const [filesById, setFilesById] = useContext(UploadFilesContext);
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_569ad31f181536d060823916fa7d6842 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.airline_ancillary_data_convert____airline_ancillary_data_convert____state.generate_file", ({ ["files"] : filesById["upload1"], ["upload_id"] : "upload1" }), ({  }), "uploadFiles"))], args, ({  })))), [addEvents, Event, filesById, setFilesById])


  return (
    <RadixThemesButton onClick={on_click_569ad31f181536d060823916fa7d6842}>

{"Upload"}
</RadixThemesButton>
  )
}

export function Fragment_efa4fa7563b726c932fd49a2f8f2a957 () {
  const reflex___state____state__airline_ancillary_data_convert____airline_ancillary_data_convert____cond_state = useContext(StateContexts.reflex___state____state__airline_ancillary_data_convert____airline_ancillary_data_convert____cond_state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>

{isTrue(reflex___state____state__airline_ancillary_data_convert____airline_ancillary_data_convert____cond_state.show) ? (
  <Fragment>

<RadixThemesButton onClick={((...args) => (addEvents([(Event("reflex___state____state.airline_ancillary_data_convert____airline_ancillary_data_convert____state.download_file", ({  }), ({  })))], args, ({  }))))}>

{"Download"}
</RadixThemesButton>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_7bc499f266de6ff47946c9a12e326873 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <RadixThemesLink asChild={true} css={({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} size={"3"}>

<NextLink href={"https://reflex.dev"} passHref={true}>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["textAlign"] : "center", ["padding"] : "1em" })} direction={"row"} gap={"3"}>

{"Built with "}
<svg css={({ ["viewBox"] : "0 0 56 12", ["fill"] : "none" })} height={"12"} width={"56"} xmlns={"http://www.w3.org/2000/svg"}>

<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"}/>
<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"}/>
<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"}/>
<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"}/>
<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"}/>
<path css={({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") })} d={"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"}/>
</svg>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_ce8bcea548e7072af157110c53ab895c () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>

{isTrue((resolvedColorMode === "light")) ? (
  <Fragment>

<LucideSunIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
) : (
  <Fragment>

<LucideMoonIcon css={({ ["color"] : "var(--current-color)" })}/>
</Fragment>
)}
</Fragment>
  )
}

                function Fallback({ error, resetErrorBoundary }) {
                    return (
                        <div>

<p>

{"Ooops...Unknown Reflex error has occured:"}
</p>
<p css={({ ["color"] : "red" })}>

{error.message}
</p>
<p>

{"Please contact the support."}
</p>
</div>
                    );
                }
            

export default function Component() {

  return (
    <Errorboundary_2b1bb912bcf07317cdf69979a30cdca7/>
  )
}
