import React, { useEffect } from 'react'
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';
import { Text } from "crox-new-uikit";
import useMediaQuery from "@mui/material/useMediaQuery";
import PageHeader from "components/PageHeader";

export default function Ramp() {
    const isMobile = useMediaQuery("(max-width: 600px)");

    const desktopramp = () => {
        new RampInstantSDK({
            hostAppName: 'Ramp Demo',
            hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
            // swapAmount: '10000000000000000',
            // swapAsset: 'ETH',
            userAddress: '0x994d01f35d4274C782C121fa6EcfA8c801EF10A7',
            url: 'https://ri-widget-staging.firebaseapp.com/', // only specify the url if you want to use testnet widget versions,
            // use variant: 'auto' for automatic mobile / desktop handling,
            // 'hosted-auto' for automatic mobile / desktop handling in new window,
            // 'mobile' to force mobile version
            // 'desktop' to force desktop version (default)
            //   variant: 'auto', 
            hostApiKey: 'joxbnwnmfn7n7mqmkxbtb9yo9fhthd6rsekzevxj',
            variant: 'embedded-desktop',
            containerNode: document.getElementById('ramp-container') as HTMLElement | undefined,
        })
            .on('*', console.log)
            .show();
    }

    const mobileramp = () => {
        new RampInstantSDK({
            hostAppName: 'Crox Ramp',
            hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
            // swapAmount: '10000000000000000',
            // swapAsset: 'ETH',
            userAddress: '0x994d01f35d4274C782C121fa6EcfA8c801EF10A7',
            url: 'https://ri-widget-staging.firebaseapp.com/', // only specify the url if you want to use testnet widget versions,
            // use variant: 'auto' for automatic mobile / desktop handling,
            // 'hosted-auto' for automatic mobile / desktop handling in new window,
            // 'mobile' to force mobile version
            // 'desktop' to force desktop version (default)
            //   variant: 'auto', 
            hostApiKey: 'joxbnwnmfn7n7mqmkxbtb9yo9fhthd6rsekzevxj',
            variant: 'embedded-mobile',
            containerNode: document.getElementById('ramp-container') as HTMLElement | undefined,
        })
            .on('*', console.log)
            .show();
    }
 
    useEffect(() => {
        mobileramp()
    }, [])


    return (
        <>

            <div style={{ background: '#27262c', maxWidth: "500px", width: "96%", marginTop: "30px" }}>
                <PageHeader
                    title="Exchange"
                    description="Trade tokens in an instant"
                />
            </div>
            <Text id="ramp-container" style={{ maxWidth: '450px', width: '96%', height: '700px', margin: "10px" }}> </Text>

        </>
    )
}
