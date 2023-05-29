import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Map() {
    const [selected, setSelected] = useState([]);

    const handleClick = (index) => {
        if (selected.includes(index)) {
            setSelected(selected.filter((item) => item !== index));
        } else {
            setSelected([...selected, index]);
        }
    };
    const handleClear = () => {
        setSelected([]);
    };
    return (
        <div className='conatiner-fluid'>
            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded '>
                <h3 className='fs-33 fw-bold text-center dark-blue-text z-2 mt-md-3'>
                    Choose Your Target States:
                </h3>
                <div className="row w-80 mx-auto text-white">

                    <div className='col-12 px-0 overflow-hidden  text-center map-top-gap z-0'>
                        <svg id="wrapper" viewBox="0 0 900 600" preserveAspectRatio="xMinYMin"
                            style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                            <g id="map-group"><svg version="1.1" id="map" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 900 600" preserveAspectRatio="xMinYMin" data-originalstrokewidth=".5501">
                                <defs>
                                    <pattern id="circles3" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <circle cx={4} cy={4} r={2} fill="#000" />
                                    </pattern>
                                    <pattern id="diagonal1" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <path id="pattern0" d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" strokeWidth={1} />
                                    </pattern>
                                    <pattern id="diagonal3" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <path id="pattern1" d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" strokeWidth={3} />
                                    </pattern>
                                    <pattern id="vertical1" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <rect x={3} y={0} width={1} height={10} fill="#000" />
                                    </pattern>
                                    <pattern id="vertical3" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <rect x={3} y={0} width={3} height={10} fill="#000" />
                                    </pattern>
                                    <pattern id="horizontal1" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <rect x={0} y={4} width={10} height={1} fill="#000" />
                                    </pattern>
                                    <pattern id="horizontal3" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <rect x={0} y={4} width={10} height={3} fill="#000" />
                                    </pattern>
                                    <pattern id="crosshatch" width={8} height={8} patternUnits="userSpaceOnUse">
                                        <rect width={8} height={8} fill="#fff" />
                                        <path id="pattern2" d="M0 0L8 8ZM8 0L0 8Z" strokeWidth="0.5" stroke="#aaa" />
                                    </pattern>
                                    <pattern id="subtlepatch" width={5} height={5} patternUnits="userSpaceOnUse">
                                        <rect width={5} height={5} fill="#fff" />
                                        <rect x={2} y={2} width={1} height={1} fill="#000" />
                                    </pattern>
                                    <pattern id="checkers" width={8} height={8} patternUnits="userSpaceOnUse">
                                        <rect width={8} height={8} fill="#fff" />
                                        <path id="pattern3" fill="#000" fillRule="evenodd" d="M0 0h4v4H0V0zm4 4h4v4H4V4z" />
                                    </pattern>
                                    <pattern id="raindrops" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#fff" />
                                        <path id="pattern4" fill="#000"
                                            d="M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z" />
                                    </pattern>
                                    <pattern id="texture" width={4} height={4} patternUnits="userSpaceOnUse">
                                        <rect width={4} height={4} fill="#fff" />
                                        <path id="pattern5" fill="#000" d="M1 3h1v1H1V3zm2-2h1v1H3V1z" />
                                    </pattern>
                                    <pattern id="circles3_a03500_000000" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#a03500" />
                                        <circle cx={4} cy={4} r={2} fill="#000000" />
                                    </pattern>
                                    <pattern id="diagonal1_d9b400_535353" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#d9b400" />
                                        <path id="pattern0" d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#535353"
                                            strokeWidth={1} />
                                    </pattern>
                                    <pattern id="diagonal3_3264c8_ffffff" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#3264c8" />
                                        <path id="pattern1" d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#ffffff"
                                            strokeWidth={3} />
                                    </pattern>
                                    <pattern id="horizontal1_72b38e_000000" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#72b38e" />
                                        <rect x={0} y={4} width={10} height={1} fill="#000000" />
                                    </pattern>
                                    <pattern id="horizontal3_986ba1_ffffff" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#986ba1" />
                                        <rect x={0} y={4} width={10} height={3} fill="#ffffff" />
                                    </pattern>
                                    <pattern id="vertical1_b9a087_ffffff" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#b9a087" />
                                        <rect x={3} y={0} width={1} height={10} fill="#ffffff" />
                                    </pattern>
                                    <pattern id="vertical3_4c91bf_ffff33" width={10} height={10} patternUnits="userSpaceOnUse">
                                        <rect width={10} height={10} fill="#4c91bf" />
                                        <rect x={3} y={0} width={3} height={10} fill="#ffff33" />
                                    </pattern>
                                    <pattern id="checkers_cc3333_f7f7f7" width={8} height={8} patternUnits="userSpaceOnUse">
                                        <rect width={8} height={8} fill="#cc3333" />
                                        <path id="pattern3" fill="#f7f7f7" fillRule="evenodd" d="M0 0h4v4H0V0zm4 4h4v4H4V4z" />
                                    </pattern>
                                    <pattern id="texture_d1dbdd_525252" width={4} height={4} patternUnits="userSpaceOnUse">
                                        <rect width={4} height={4} fill="#d1dbdd" />
                                        <path id="pattern5" fill="#525252" d="M1 3h1v1H1V3zm2-2h1v1H3V1z" />
                                    </pattern>
                                </defs>
                                <g id="splits">
                                    <g id="MD_E_group">
                                        <path id="MD_E" className="state md"
                                            d="m781.094 259.1593-6.6739 1.4375-8.955 1.6914 6.1777 28.3711 2.5507-.0352 2.752.8633 1.8691.3086.8633-1.8789-1.2949-1.8692v-1.582l-2.1563-1.8477-1.8789-4.8984 1.1504-4.746-.1445-1.8478-1.1504-1.16s1.3047-1.4373 1.3047-2.002c0-.5752.4414-1.8692.4414-1.8692l1.7246-1.1504 1.7266-1.4375.4316.8613-1.295 1.4375-1.1503 3.3067.2871.9961 1.582.3086.4317 4.879-1.8692.8612.2871 3.1543.4317-.1445 1.0059-1.7246 1.4375 1.58-1.4375 1.131-.2872 3.0292 2.3106 3.0195 3.4512.4102 1.4375-.7188 2.875 3.7266 1.2324.4726 5.916-2.494 1.7754-3.5743-.379-4.375-.0526.0508-5.3594 1.0586-4.5801.1015-1.6445-6.16-1.7149-8.1447-2.2793-5.494Zm4.1484 30.1308-1.6426.4317h-.0098l1.0059 2.2168.1445 1.582 1.0274 1.6426s.7793-.7789.7793-1.0664c0-.2876-.6465-2.7325-.6465-2.7325Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="MD_E_label" x="812.2343" y="303.9547" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MD_E_tspan"
                                                x="812.2343" y="303.9547" fill="#000000">MD</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m801.8958 296.9587-32.5604-23.6261" id="MD_E_line" />
                                    </g>
                                    <g id="NJ_C_group">
                                        <path id="NJ_C" className="state nj"
                                            d="m802.6628 236.8978-16.711.3008-.0234.3613-2.0214 1.0273.7187 2.4336.1426 1.0079 2.4648.287.8535 2.3008 3.1836 2.1563 2.1563 1.4375v.7187l-.502.4512 12.2325 6.75.6953-3.2988-.586-1.006-.1543-8.3397-1.4375-3.0078-1.0058.7187-2.4453.287-.4297-.4315 1.0058-.8633 1.8692-1.7246.0605-.9746Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="NJ_C_label" x="823.2147" y="260.3686" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NJ_C_tspan"
                                                x="823.2147" y="260.3686" fill="#000000">NJ</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m801.6337 251.0216 13.631 5.9187Z" id="NJ_C_line" />
                                    </g>
                                    <g id="NJ_N_group">
                                        <path id="NJ_N" className="state nj"
                                            d="m788.8562 224.929-2.0547 2.4336v2.7325l-1.7441 2.742-.1446 1.4376 1.1602 1.129-.1211 1.7949 16.711-.3008-.2813-2.4688.5136-2.4453-.1035-1.7441-2.5058-1.5625-4.5391-1.047-3.6973-1.2323-3.1836-1.459Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="NJ_N_label" x="823.2399" y="260.3644" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NJ_N_tspan"
                                                x="823.2399" y="260.3644" fill="#000000">NJ</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m801.6337 251.0216 13.631 5.9187Z" id="NJ_N_line" />
                                    </g>
                                    <g id="PA_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="PA_E" className="state pa"
                                            d="m794.082 1019.4961-16.123 3.7266-15.4043 3.123 8.752 42.9199 5.5214-1.1133 13.248-2.5273 7.3946-1.4375.2461-.2051 1.8789-1.4375 1.879-.6152-.0099.0293 1.17-.2461 2.0761-1.1094 1.0664-2.207 1.4395-2.002 2.875-2.7324v-.7187l-2.1563-1.4375-3.164-2.1563-.873-2.3008-2.4337-.2871-.1445-1.0078-.7187-2.4434 2.0039-1.0058.1426-2.1582-1.1602-1.1485.1445-1.4394 1.7461-2.7207v-2.7305l2.3926-2.3633-.8223-.5957-2.2382-.1738-2.0547-1.7266-1.375-5.4414-3.1114.1016Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="PA_E_label" x="768.3326"
                                                y="1050.8326" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="PA_E_tspan"
                                                x="768.3326" y="1050.8326" fill="#000000">PA</tspan>
                                        </text>
                                    </g>
                                    <g id="PA_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="PA_S" className="state pa"
                                            d="m802.6387 1041.793-77.2676 14.2812.9316 3.668 3.1836 17.1191 2.918-.5664 10.6387-1.334 33.7851-6.8086 13.248-2.5273 7.3946-1.4375.2461-.2051 1.8789-1.4375 1.879-.6152-.0099.0293 1.17-.2461 2.0761-1.1094 1.0664-2.207 1.4395-2.002 2.875-2.7324v-.7187l-2.1563-1.4375-3.164-2.1563-.873-2.3008-2.4337-.2871-.1445-1.0078-.7187-2.4434 2.0039-1.0058Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="PA_S_label" x="768.3518"
                                                y="1050.7661" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="PA_S_tspan"
                                                x="768.3518" y="1050.7661" fill="#000000">PA</tspan>
                                        </text>
                                    </g>
                                    <g id="TX_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TX_W" className="state tx"
                                            d="m388.205 1156.0273-1.4394 16.6563-3.459 49.3965-2.0039 17.3144-25.8574-1.4375-25.8789-2.4336-7.1172-.6172.5645 4.1583 1.746.4316 2.3008 2.5879 1.293 3.8828 4.17 2.0117 1.1503 2.877 6.336 7.0332 1.1601 1.4375 4.4473 1.8691 1.0273 1.8692 1.4375.8535.4317 2.4336 2.875 5.75v7.1894l2.0234 4.1699 6.623 6.9004 4.6212 1.8692 1.582 1.7246v.5761l3.461 2.0118 1.7245.5761 1.582.9844 2.3008.8731 2.1563-2.1563 3.9023-5.4629.8614-3.3066 2.0039-2.875 3.1836-1.2949 4.0351-1.5821 2.7324 2.0137 6.6133.5742 6.0586 1.0078 2.3106 1.8692v1.0058l2.291 2.7305 5.3398 4.7461.1426 1.2832 1.5918 1.7246.7188 3.7383 4.744 10.916-.1425 1.7461 3.7383 2.3008 3.1836 5.8847 3.0293 3.8809 2.875 1.1504.4668.6523-1.4297-131.1328-1.7168-1.5117-.0625-1.8477.2676-16.123 2.0742-20.8477-27.6856-1.0273-20.2324-.9551 1.0586-.0195Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TX_W_label" x="435.8216"
                                                y="1254.7898" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TX_W_tspan"
                                                x="435.8216" y="1254.7898" fill="#000000">TX</tspan>
                                        </text>
                                    </g>
                                    <g id="TX_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TX_S" className="state tx"
                                            d="m484.4082 1319.8438-2.8047 3.164-3.0996 4.8067-2.9375 6.1093-1.377 7.3125.5137 6.2637 2.4336 6.3867.5117 6.3125.7832-.2012-.1445-1.2949-.4316-4.5996-2.289-6.3887-.7911-5.4628.2871-4.5899 1.7871-5.8945 3.9024-5.8125 4.2421-5.9063Zm53.9902-61.2852-157.0742-19.3574-.0215.1933-25.8574-1.4375-25.8789-2.4336-7.1172-.6172.5645 4.1583 1.746.4316 2.3008 2.5879 1.293 3.8828 4.17 2.0117 1.1503 2.877 6.336 7.0332 1.1601 1.4375 4.4473 1.8691 1.0273 1.8692 1.4375.8535.4317 2.4336 2.875 5.75v7.1894l2.0234 4.1699 6.623 6.9004 4.6212 1.8692 1.582 1.7246v.5761l3.461 2.0118 1.7245.5761 1.582.9844 2.3008.8731 2.1563-2.1563 3.9023-5.4629.8614-3.3066 2.0039-2.875 3.1836-1.2949 4.0351-1.5821 2.7324 2.0137 6.6133.5742 6.0586 1.0078 2.3106 1.8692v1.0058l2.291 2.7305 5.3398 4.7461.1426 1.2832 1.5918 1.7246.7188 3.7383 4.744 10.916-.1425 1.7461 3.7383 2.3008 3.1836 5.8847 3.0293 3.8809 2.875 1.1504 1.4375 2.0137-1.1504 3.8808.5762.8633 1.1504.5742-.2891 3.0196-.5742.5761.5742 2.002 2.877 1.7246 1.1601 5.7519 1.8691 3.459 6.7559 3.0196 4.621.9961 3.75 2.7324 2.875.5742 1.1505-.4414 4.9082 1.0273 5.0312 3.4414 2.7422-1.7265.873-1.293-1.582-2.4453-.873-5.4727-1.58-6.1621-.7188-2.1562.7187-4.0254 1.0059-3.4414 1.1504-4.0254 1.3047-4.8867-2.0235-1.7266.8633-1.7246 3.5938-.2871 3.4609-4.8887 3.0195-.5762 5.1856-3.1621 1.5703-1.2949 5.6172-3.0293 5.0527-2.1562 4.7559-2.875 2.4648-1.8477 5.0313-4.7461 1.1503-.7187 1.8692-1.3028 2.3008-1.7168.873-1.7246 8.7793-4.0254 5.0527-1.4062-.2578-3.1113 1.336-2.9786.5957-6.5722.5644-2.0957-1.3652-1.9102 2.5664-4.4668.6582-7.4453-.668-.6992Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TX_S_label" x="435.9069"
                                                y="1254.8027" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TX_S_tspan"
                                                x="435.9069" y="1254.8027" fill="#000000">TX</tspan>
                                        </text>
                                    </g>
                                    <g id="PA_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="PA_N" className="state pa"
                                            d="m794.082 1019.4961-16.123 3.7266-38.3047 7.7636-7.9277 1.2852-.5547-5.8027-4.7754 4.5175-1.1504.4121-3.7383 2.67 2.5977 17.0254 1.2656 4.9804 77.2676-14.2812.1094-1.6465-1.1602-1.1485.1445-1.4394 1.7461-2.7207v-2.7305l2.3926-2.3633-.8223-.5957-2.2382-.1738-2.0547-1.7266-1.375-5.4414-3.1114.1016Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="PA_N_label" x="768.3436"
                                                y="1050.8098" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="PA_N_tspan"
                                                x="768.3436" y="1050.8098" fill="#000000">PA</tspan>
                                        </text>
                                    </g>
                                    <g id="PA_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="PA_W" className="state pa"
                                            d="m771.3066 1069.2656-8.752-42.9199-22.9003 4.6406-7.9277 1.2852-.5547-5.8027-4.7754 4.5175-1.1504.4121-3.7383 2.67 2.5977 17.0254 2.1972 8.6484 3.1836 17.1191 2.918-.5664 10.6387-1.334Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="PA_W_label" x="768.3405"
                                                y="1050.77" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="PA_W_tspan"
                                                x="768.3405" y="1050.77" fill="#000000">PA</tspan>
                                        </text>
                                    </g>
                                    <g id="FL_S_group" transform="translate(-16.762089,-804.91929)"><text id="FL_S_label" x="747.8206"
                                        y="1296.6423" style={{ display: 'none' }}>
                                        <tspan style={{
                                            fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                            , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                        }} dy={0} id="FL_S_tspan"
                                            x="747.8206" y="1296.6423" fill="#000000">FL</tspan>
                                    </text>
                                        <path id="FL_S" style={{
                                            fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none',
                                            fill: 'none', fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551',
                                            strokeLinecap: 'round', strokeLinejoin: 'miter', strokeMiterlimit: '3.999',
                                            strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)',
                                            stopOpacity: 1, pointerEvents: 'visible', display: 'none'
                                        }} className="state fl"
                                            d="m770.4297 1305.8633-38.6895 9.8867-.9902 1.1367 3.1836 3.2871 2.289 2.7305 2.588 4.7559 2.5996 3.4492 1.8691 4.4687 1.5918.2871 1.4375-1.8691 1.58 1.0059 2.291 3.5937.586 3.1543 2.7305 3.8809.7187-1.1504 3.4512.2871 3.1836 2.0136 3.0293 4.5997.7188 3.0195.287 2.5879 1.0079.8633 1.1601.4316 2.1563-.8633 1.3047-1.4375 3.461-.1445 2.7304-1.293 2.4453-2.875-.4121-1.7265-.3067-2.1563.5743-1.7246-.2774-1.7266 2.1563-1.1484.287-3.0098-.584-1.582-.412-10.6387-1.1485-6.7461-4.0273-7.3222-3.1836-5.1758Zm10.8867 41.4219-.6367.4101-.8633 2.5254-1.293 4.1074-2.875 4.6641-3.9023 3.7266-3.0195 1.7265-2.2285 1.375h-.0098l1.0781.9238 2.4434-1.8476 4.7539-3.7383 3.3183-3.4512 2.2286-5.8945.8613-1.5098Zm-20.1582 18.6796-2.0957 1.4375-1.293 2.0938-1.162.207-2.1563.5645v.0097l.8007.7911 2.086-1.0782 3.7578-1.2949 3.082-1.0879-.3593-.9238-1.5098-.2871Z"
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                    </g>
                                    <g id="FL_C_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="FL_C" className="state fl"
                                            d="m753.9746 1277.1113-29.084 7.9629 1.1153 2.6582 2.7422 3.2852v8.4726l-1.3047 4.17.287 2.4433 1.1602 4.3145 1.582 3.5937.7188-.4316 1.295-4.0254-2.3008-.8633-.2872-.5742 1.4375-.5762 4.0352.8633.1328 1.4375-2.875 4.8887-.8887 1.0195 38.6895-9.8867-.9238-1.8945-2.5977-2.5879-2.5879-6.6036.7188-1.1503.996-1.1602-1.4374-2.5684-3.5938-3.3066-4.3125-4.8984Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="FL_C_label" x="747.6602"
                                                y="1296.4307" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="FL_C_tspan"
                                                x="747.6602" y="1296.4307" fill="#000000">FL</tspan>
                                        </text>
                                    </g>
                                    <g id="FL_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="FL_N" className="state fl"
                                            d="m733.7285 1251.7695-1.1719 1.4063 1.3555 3.6972-.205 4.1075-2.002-.7188-.3809-2.5683-4.5586-.1836-4.8261.5957-19.1739 1.1504-9.6328.5742-7.2285-.4414-1.295-1.2735-2.3105-3.4511-4.8261-.2461-6.0586.5644-22.7578 2.5879-9.0782 1.1504-.287 2.7324 1.582 1.5821 2.3203 1.7246.205 7.1582 3.0801-.545 5.3418-1.8691 5.3184-.4316 3.9023-.5743 6.7774 1.5801 7.1894 3.4512 1.4375 1.2949 2.5879 1.0059 1.4375 1.7148.3086 2.4434 2.875-1.1602h3.4414l3.1836-1.7246 3.3164-3.1523 2.7422.1426.4316-1.0059-.7207-.8633.1543-1.7246 3.5957-.7188h2.2989l2.5996 1.293 3.7382 1.2949 2.1563 3.3067 2.4648.8633.9961 2.998 3.0293 1.4375 1.4375 2.3008 1.7149.5644 4.621 1.1504.0352.084 29.084-7.9629-.6015-1.0136-4.754-8.3399-3.3183-8.668-2.0215-6.5097-4.6113-.2774Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="FL_N_label" x="747.6657"
                                                y="1296.4733" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="FL_N_tspan"
                                                x="747.6657" y="1296.4733" fill="#000000">FL</tspan>
                                        </text>
                                    </g>
                                    <g id="MI_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MI_E"
                                            d="m653.9512 972.0508 7.5742 76.8222 3.0586-.5312 9.1601-1.3652 3.4512-.3907.123-.5547.1446-1.2734 1.8691-3.3066 1.7754-1.5391-.205-4.5195 1.4374-1.3965.9766-.3086.205-3.1621 1.334-2.7012.9454.5332.1445.5957.7188.1446 1.746-.8633-.289-8.4922-2.875-7.332-2.0234-8.0508-2.1563-2.8555-2.3203-1.6016-1.4375 1.0254-3.4512 1.5821-1.746 4.457-2.4337 3.3066-1.0058.5645-1.3145-.5742s-2.3103-1.3039-2.1562-1.8789c.1335-.5649.4297-4.4375.4297-4.4375l3.0312-1.1602.6973-3.0078.5957-2.3106 2.1367-1.4394-.2676-8.9024-1.459-2.0136-1.1484-.7188-.7207-1.8691.7207-.7188 1.4375.3086.164-1.459-2.1562-2.0234-1.1719-2.2793h-2.3105l-4.004-1.293-4.8984-3.0097Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MI_E_label" x="655.1722"
                                                y="1021.9141" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MI_E_tspan"
                                                x="655.1722" y="1021.9141" fill="#000000">MI</tspan>
                                        </text>
                                    </g>
                                    <g id="MI_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MI_W"
                                            d="m594.9063 928.6523-.0196.0098-2.0136.4941-4.795 3.4707-1.9218.7188-1.6426 1.8281 1.4375 1.0059 1.8496-.8203 2.9355-1.7168 4.5801-4.5801Zm9.9414 12.6621-4.211.4102-3.871 2.1777-2.0235 1.9825-1.1602 1.6015-1.5722.6993-1.7246 2.5878-.1543 1.1602-3.9024 1.8477-2.1562 1.746-5.3204.8633-.584.5645v.8633l-3.1835 2.0117-2.4336.7187-.6367.5137 3.3359 4.58 7.0156 1.006 7.332 1.9218 2.5372.9238 10.7812 2.4649 1.8496 2.002 3.1621 1.2324 1.7266 9.1406 1.2305.9023 1.0273.9258 2.834-6.2148.8848-3.5938 1.7246-3.8808.7187-.123 1.0059 1.4374h.5644l4.0274-2.1777 1.3027 1.4375.4121.164 1.1504-1.0273 1.0254-2.7207 2.1582-.7188 6.1914-.5957 1.7246-2.289 4.6211-.1543 5.1758 1.1601h1.582l2.875-1.3046 2.0332.1542 1.8692-.5644 3.3183.4102.7188.3085 1.1601-.3085-1.1601-.8516-1.1602-.5645-2.877-2.7324v-6.1816l-1.3027-.4414-1.0078 1.0254-5.4726 1.4375-1.7149.412-2.5879-.6992-.4414-.3066v-5.0117l-1.3047-.1445-2.291 1.1503-4.0351 1.7246-5.9141.2676-3.0098 1.0274-3.5937 3.162-1.459.8634h-1.0059l-1.1308.7187-1.457-.4101-1.4375-1.172-1.295.8634-3.4922.1425-2.4218-2.4629-1.3047-2.7324-1.2832-.9765-2.877-.8516h-2.0215l-1.1504-1.1602-3.1835 2.588-.8536 1.0058-.7187-.4414.2676-2.2793 2.1562-2.875.4512-2.1582 2.0234-.7188 1.2852-2.7402 3.3164-.8535.3086-.8633-1.0274-.9844Zm59.2539 20.6114-1.9512.205-1.4375.1641-.3086 1.0059.8945.412.5645 2.2579 2.875.1348 1.1601-1.0684s-.0816-1.3152-.3691-1.459a12.9403 12.9403 0 0 1-1.4375-1.6425Zm-10.2673 9.9592.1169.1658Zm.1169.1658h-.1387l-.5664.5761-.8613-.412-2.752-2.0235h-.0117l-2.5977 1.5625-2.5879 2.0215.3086 3.1426.8516.289 1.8691.4512.4121.7188-2.2812.7187-2.3105.2774-1.3047 1.582-.2754 1.8476.2754 1.4375.3086 4.8985-3.1836 1.8691-.5743-.1543v-3.748l1.1602-2.1563.5645-2.1562-.7188-.7188-1.7148.7188-.8633 3.748-2.4649.9863-1.5703 1.7461-.1445.8516.5664.7402-.5547 2.2891-2.0137.4414v.9961l.7188 2.1563-1.0273 5.4746-1.416 3.5937.5644 4.1602.4414 1.0058-.7402 2.1563-.2657.7187-.3086 2.4453 3.1836 5.3399 2.588 5.75 1.3046 4.3125-.7187 4.1504-.873 5.3183-2.1368 4.6016-.3086 2.4336-2.8945 2.7324 3.9023-.125 19.0996-2.0019 6.4903-.8926.1035 1.4785 3.041-.5274Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MI_W_label" x="655.1272"
                                                y="1021.9062" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MI_W_tspan"
                                                x="655.1272" y="1021.9062" fill="#000000">MI</tspan>
                                        </text>
                                    </g>
                                    <g id="VA_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="VA_E" className="state va"
                                            d="M772.3418 1077.3125s-.124 4.8061-.7402 4.498l-.9434-.3652-7.5137 52.6016 47.1016-10.1524.0293-.041-3.2129-5.3398-5.166 1.5097-1.4063-1.3359 2.2793-1.2324-.4414-2.2383-1.582-1.582-.1035-1.252-2.0332-1.3672-.082-1.4375 2.3925.0821.207-1.2325-1.0996-.6972.4317-1.7149-1.2324-.9961.3789-4.1699-.7696-1.0781-2.8554-.3594-.6153-2.7324-1.746-.2774-2.7325-.8418-3.9629-.0195-4.4375-1.1308-.5332-1.6426-.1035-1.8477 1.7461-2.3008.5957-3.2343-1.4785-1.8496-1.9004-1.0274-5.1543-1.1601-.0625-2.5977Zm40.5527 17.416-5.75 2.2598.123 1.7461-.0214-.0215-.6777 2.7539-1.4063 3.7168-.4102 4.8476 1.3145 4.127 1.92-1.7031 1.6425-4.416-.4102-3.0098.379-4.0762 2.6093-3.3476Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="VA_E_label" x="766.6179"
                                                y="1113.7817" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="VA_E_tspan"
                                                x="766.6179" y="1113.7817" fill="#000000">VA</tspan>
                                        </text>
                                    </g>
                                    <g id="WV_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WV_S" className="state wv"
                                            d="m743.92 1107.75-29.336-20.7402-1.9395 2.8925-.873 1.1504v2.1563l1.0273 1.5722-.4316 1.4376-1.58.8613-.4415-1.5918-1.1309-1.0059-1.1601.586-.8633 3.4511-.1426 4.4668-1.4375 1.2832-.1445 2.4434-1.7246.7187-1.9512.0821.2246 4.6738.7188 1.4375 2.3008 1.293.5761 2.0136 3.8203 3.0801 1.5196 3.2246 2.793 1.7676 1.9511 2.7012.9961 1.0254 3.3262.791 2.1582-.9238 2.084-1.2325s2.053 1.1094 2.207 1.1094c.5854.0513 3.4922-1.2129 3.4922-1.2129l1.787-4.0547 2.2599.5118 2.6289-1.92 1.6113.4824 2.5059-3.4609.1855-1.7031-.8008-1.0274Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WV_S_label" x="732.4279"
                                                y="1101.4723" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WV_S_tspan"
                                                x="732.4279" y="1101.4723" fill="#000000">WV</tspan>
                                        </text>
                                    </g>
                                    <g id="WV_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WV_N" className="state wv"
                                            d="m726.1797 1059.3105-1.1602 1.1504-.873 1.2832 1.0273 2.7325v4.1679l-.4414 4.4571-.287 5.0332-2.004 3.4492-2.7305 3.0098-2.0234 1.4374-1.8691-.4316-1.1504 1.2832-.084.127 29.336 20.7402.6327-1.3965 1.211-3.1523.5644-4.8672.9551-.4824 2.086 2.1562 3.5312-.3086.9258-3.4922.789-3.2031 2.3633-.4414 1.0567-2.4434 2.2597-2.1582 2.4434-4.9277.084-4.6016 3.7988 1.4375 5.1953 2.2598.6895-4.9297-1.2325-1.1504-1.7265-1.582-3.2442-1.6211-1.1601-.9043-1.6426.4316-1.7988 1.293-2.2989 1.8692-2.5879.2871-1.2949-.5743-1.582 2.3008-1.3027 1.293-2.2598.5352-2.0234 2.7304-1.9004 2.291-.9649-5.3613-.758-4.3811-.238.0178-11.0704 1.6016-4.1289.6562Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WV_N_label" x="732.3256"
                                                y="1101.543" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WV_N_tspan"
                                                x="732.3256" y="1101.543" fill="#000000">WV</tspan>
                                        </text>
                                    </g>
                                    <g id="OH_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="OH_S" className="state oh"
                                            d="m725.0742 1065.2383-64.2383 8.4355.123.9473 2.3204 20.8477.5137 4.2812 3.6562-.1016 2.1563-.7187 3.0097 1.334 1.8477 3.873h4.5703l1.6836 1.8789 1.5723-.0625 2.2597-1.1914 2.2383.3399 4.8262.4316 1.541-1.9004 2.084-1.1504 1.8496-.6152.5742 2.4648 1.582.8516 3.1016 2.0957 1.9512-.0723 1.1797-.4414.164-2.4648 1.418-1.2735.1035-4.2617.9023-3.6562 1.1602-.5449 1.1621 1.0273.4824 1.5 1.5391-.9258.3809-1.293-.9961-1.6953.0605-2.0527.668-.9551 1.9316-2.9472.9239-1.377 1.8789.4121 2.0332-1.4394 2.7324-3.0079 2.4648-3.625.2871-4.4882.4317-4.4571Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="OH_S_label" x="692.4533"
                                                y="1075.0403" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="OH_S_tspan"
                                                x="692.4533" y="1075.0403" fill="#000000">OH</tspan>
                                        </text>
                                    </g>
                                    <g id="OH_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="OH_N" className="state oh"
                                            d="m721.4668 1034.0781-5.4434 3.5938-3.4511 2.0136-3.0293 3.3067-3.5938 3.4512-2.875.7187-2.5976.4297-4.9102 2.3008-1.8691.1445-3.0293-2.7324-4.6211.5762-2.289-1.295-2.127-1.2011-4.3536.6367-9.0683 1.4375-9.9805 1.9512 1.1484 12.9902 1.459 11.2734 64.2383-8.4355-.0234-.7227-.8633-2.5664.3086-1.0586 1.6113-1.539-2.0332-8.0625-2.5976-17.211Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="OH_N_label" x="692.351"
                                                y="1075.1047" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="OH_N_tspan"
                                                x="692.351" y="1075.1047" fill="#000000">OH</tspan>
                                        </text>
                                    </g>
                                    <g id="IN_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IN_S" className="state in"
                                            d="m660.7227 1073.8398-39 5.0997.9824 12.0625.4316 6.1601-.7187 4.8887.287 2.875 1.5313 2.8457.4824 4.7754-2.3007 3.7383-1.5918 3.4492-2.0118 2.5683-.4316 4.0254-.0527 2.5371-.0195.0196 2.5976-1.375 4.9805-.8633 3.9746-.4317 1.2949 1.418 1.2734.7188 1.3848-2.67 2.8965-1.1914 1.9316 1.334.4102.9043 1.0684-.2363-.1446-2.711 2.3926-1.3339 2.2285-1.1309 1.4082 1.4375h2.9766l.5136-1.3555-.287-2.1152 2.4843-3.5527 4.0781-2.9473.545-4.334 2.8535-.4922 3.1523-1.3672 2.2598-1.4375-.1016-1.2109-1.0898-1.6035.33-2.0117-.5351-5.1153Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IN_S_label" x="641.4473"
                                                y="1086.5913" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IN_S_tspan"
                                                x="641.4473" y="1086.5913" fill="#000000">IN</tspan>
                                        </text>
                                    </g>
                                    <g id="IN_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IN_N" className="state in"
                                            d="m658.0742 1048.2598-4.9707.4726-19.584 2.0137-4.539.1426-2.5274 1.4375-1.8672 1.7148-1.0078.2891-1.293-.8438-2.7421-.789.8515 10.4023 1.1504 13.6582.1778 2.1817 39-5.0997-1.3145-11.3867Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IN_N_label" x="641.4651"
                                                y="1086.5823" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IN_N_tspan"
                                                x="641.4651" y="1086.5823" fill="#000000">IN</tspan>
                                        </text>
                                    </g>
                                    <g id="IL_C_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IL_C" className="state il"
                                            d="m620.6094 1065.6406-49.8028 3.1875-.1875 3.3594-1.6425 1.4082-.6172 1.4375v2.4238l-1.6114.4102-1.4375 1.0273-.205 1.211.205 1.8476-1.5195 1.1621-.9258 2.4844.4121 3.2559 2.0528 6.5 6.5117 6.705 4.8887 3.2559-.207 3.8613.8222 1.2325 5.6895.4121 2.4433 1.2109-.0137.0742 38.9083-2.4004-.1368-1.9355-1.5312-2.8457-.2871-2.875.7187-4.8887-.4316-6.1601-1.1602-14.2442Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IL_C_label" x="599.2164"
                                                y="1090.2137" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IL_C_tspan"
                                                x="599.2164" y="1090.2137" fill="#000000">IL</tspan>
                                        </text>
                                    </g>
                                    <g id="IL_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IL_N" className="state il"
                                            d="m614.2754 1037.6719-40.8106 2.3105.2051 2.1055 2.0332.6172.8203 1.0058.4121 1.6426 3.461 3.041.6152 2.0215-.6152 3.0606-1.6445 3.2558-.506 1.9925-2.0685 1.4193-2.4347.8721-3.944 1.4251-.6172 1.6133-.6152 1.8281.6152 1.2324 1.6426 1.416-.0176.2969 49.8028-3.1875-.2149-2.541-.8515-10.4023-.4512-.6582-.7188-2.2891-1.162-3.3066-1.4376-1.5821-1.293-2.3105Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IL_N_label" x="599.2095"
                                                y="1090.1854" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IL_N_tspan"
                                                x="599.2095" y="1090.1854" fill="#000000">IL</tspan>
                                        </text>
                                    </g>
                                    <g id="WI_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WI_W" className="state wi"
                                            d="m566.543 954.3887-1.8692.7187-2.5976 1.7246-6.6153 2.875-2.5879.5645-2.5976-.4317-.8613-.7695-1.8907 2.5274-.205 2.4433v7.5176l-1.0274 1.4375-4.6719 3.4395-2.0332 5.289.4102.205 2.2285 1.8282.6152 2.8457-1.6425 2.8438v3.4511l.412 5.8946 2.6485 2.6484h3.0606l1.623 2.8457 3.08.4102 3.4513 5.0722 6.3144 3.668 1.8496 2.4434.8203 6.6035.5957 2.9472 2.0547 1.4161.1856 1.2324-1.8282 3.041.2051 2.834 2.2383 3.4511 2.2383 1.0254 2.6504.4122 1.1914 1.2109 21.455-1.2559-1.3886-68.8496-1.8379-.414-2.5684-.8926-7.3125-1.9317-7.0547-1.0273-3.3574-4.5586-.6777.4922-1.0684-.1445-.5742-1.0059-1.1914.2578-1.0078.1426-1.58.8535-.8634-.5762.5743-1.7246 1.7265-2.7324 1.0059-1.0059Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WI_W_label" x="586.3018"
                                                y="1004.7661" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WI_W_tspan"
                                                x="586.3018" y="1004.7661" fill="#000000">WI</tspan>
                                        </text>
                                    </g>
                                    <g id="NC_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NC_W" className="state nc"
                                            d="m758.9863 1170.1152 4.004-36.0371-4.2872.9375-13.4843 1.8496-14.0274 2.002-6.4277.7598-3.8008.0214-.164 3.2442-.4317 1.8691-2.5977 2.3008-1.4375 3.1523-2.0136-.2773-1.8692.5645-2.0215 3.164s-.9979-.289-1.7168-.289c-.7188 0-.7187-1.0059-.7187-1.0059l-.5742.1328-3.461 3.4512-.5742 2.7324-3.9023 1.8691-3.7383 3.1622-3.461 1.3046-3.748 2.4434-.5664 3.3184-2.4629.5742-1.582 1.2832-.4512 3.5937 18.8633-2.2988 5.4746-2.291 8.082-4.0254 6.4688-.7188 14.6855-.4316 2.6387 1.8789 1.459 2.877 3.7988-.668 11.2363-1.2949 2.588.7187Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NC_W_label" x="759.8244"
                                                y="1153.9844" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NC_W_tspan"
                                                x="759.8244" y="1153.9844" fill="#000000">NC</tspan>
                                        </text>
                                    </g>
                                    <g id="NC_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NC_E" className="state nc"
                                            d="m810.246 1123.832-4.498 1.0274-9.9628 2.1562-17.8067 3.7891-14.9883 3.2734-4.0039 36.0371 11.0137 6.625 8.8613 7.291 4.8574-1.1914 4.1797-.4296.4317-2.1582 1.7265-5.75 3.0293-4.1602 5.75-4.7441 4.6211-2.1563 2.4453-.5644 1.0059.4101h1.1504l2.7422-4.3125 1.7148-3.1641-1.1308.4317-2.0118 2.0039-.5761-1.4395h-3.748l1.7245-5.6171-.7187-1.129h-1.7149v-.8632l-.287-1.1485 1.4374 1.1485 1.295.1445 2.1562.2871 3.3066-1.4375 1.1504-2.5879.586-1.8691 2.2988-1.1504.289-3.7383-.7206-.5742 2.1582-.1445-.5762-2.002-2.1563-2.1562-3.1835-5.752Zm8.6368 13.2071-.6484.205.5761 1.6641 1.293 2.084.5762 5.4648-.1445 1.8067-1.3653.5644-2.8144 2.3008-2.291 2.209.916.1523 1.0058-1.0781 2.5254-2.1562 3.0195-1.377.1446-3.0078-.3594-3.9531Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NC_E_label" x="759.7085"
                                                y="1153.9967" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NC_E_tspan"
                                                x="759.7085" y="1153.9967" fill="#000000">NC</tspan>
                                        </text>
                                    </g>
                                    <g id="MO_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MO_W" className="state mo"
                                            d="m537.291 1078.8652-34.039 1.2618-2.0333.1015 1.129 2.2383-.2051 2.0332 2.2285 3.4512 2.752 3.6562 2.7734 2.4434 1.9101.2051 1.336.8222v2.6289l-1.623 1.4375-.4122 2.0235 1.8282 3.039 2.2597 2.6407 2.2285 1.6211 1.2324 10.373.2676 32.0605.2051 4.1602.4102 4.7852 19.9746-.7696 20.6719-.6172.3671-.0136Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MO_W_label" x="549.0551"
                                                y="1127.2706" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MO_W_tspan"
                                                x="549.0551" y="1127.2706" fill="#000000">MO</tspan>
                                        </text>
                                    </g>
                                    <g id="MO_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MO_E" className="state mo"
                                            d="m537.291 1078.8652 23.2617 79.5821 18.17-.6836 10.371-.2071 1.9512 3.0411-.6152 2.9472-2.752 2.1348-.5136 1.6445 4.7949.4102 3.4707-.6172 1.541-4.8867.5742-5.2168 1.8692-2.2598 2.3105-1.3359.0527-2.711.9024-1.7148-1.5098-2.2578-1.2011.8828-1.7754-1.9824-1.1309-4.2305.6992-2.2285-1.7246-3.0508-1.6445-4.0664-4.2715-.7188-6.2031-4.9707-1.541-3.6562.7207-2.8438 1.8476-5.3808.4102-2.5684-1.7461-.9043-6.1094-.7187-.9238-1.5098-.1035-3.7676-4.877-3.0507-6.2129-6.8809-2.0547-6.5195-.205-3.75.7187-2.0332.0195-.0098-2.2578-2.752-1.0078-2.0234Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MO_E_label" x="549.1378"
                                                y="1127.2527" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MO_E_tspan"
                                                x="549.1378" y="1127.2527" fill="#000000">MO</tspan>
                                        </text>
                                    </g>
                                    <g id="GA_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="GA_S" className="state ga"
                                            d="m728.1484 1203.6406-46.5254 26.1192.1016 1.3164-1.582 4.3125-.4317 2.875-.1445 1.7265 1.4395 3.8711.287 4.7246-.7187 2.1563.5742.7187 1.3047.7188-.1543 2.4844 2.3106 3.4511 1.2949 1.2735 7.2285.4414 19.0508-.9492 10.1289-.5528 4.4531-.8183 4.5586.1836.3809 2.5683 2.002.7188.205-4.1075-1.3555-3.6972 1.172-1.4063 4.9394.5332 4.6816.4629-.6875-5.6074 2.0137-8.8945 1.3144-3.7364-.4316-2.3007 2.9785-5.5469-.4629-1.2012-1.6933.6172-2.3106-1.1504-.5762-1.8691-1.1504-3.1641-2.0117-1.8672-2.3105-.5761-1.4375-4.3126-2.5996-5.6289-3.748-1.7246-1.8692-1.7246Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="GA_S_label" x="703.7708"
                                                y="1221.3533" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="GA_S_tspan"
                                                x="703.7708" y="1221.3533" fill="#000000">GA</tspan>
                                        </text>
                                    </g>
                                    <g id="GA_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="GA_N" className="state ga"
                                            d="m702.6328 1173.8438-37.3086 4.4374h-.0312v1.9297l.1445 1.8692.584 3.0195 3.0195 7.0449 2.1563 8.7598 1.3046 5.4629 1.4375 4.3144 1.295 6.1817 1.8886 5.5859 2.3008 3.0196.4317 3.0195 1.7246.7187.043.5528 46.5253-26.1192-.9316-1.8633-1.8691-1.7246-2.0215-1.1504-2.0235-2.5878-2.7421-2.0137-4.0254-1.582-.4317-1.2833-2.1562-2.5878-.4414-1.293-3.0293-4.416-3.1426.082-3.3594-2.0957-1.2617-1.1289-.289-1.5918.7812-1.7246 1.9824-.9863Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="GA_N_label" x="703.755"
                                                y="1221.3746" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="GA_N_tspan"
                                                x="703.755" y="1221.3746" fill="#000000">GA</tspan>
                                        </text>
                                    </g>
                                    <g id="KY_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="KY_W" className="state ky"
                                            d="m666.8262 1147.0859-12.5801-33.248-2.7656 1.9844-2.3008 3.5527.3086 2.0137-.5137 1.3965-2.957.041-1.3653-1.4785-1.9101.955-2.795 1.5703.1446 2.6192-1.0469.2363-.3593-.873-1.9825-1.334-2.834 1.1289-1.418 2.7734-1.3652-.7812-1.2324-1.4375-4.0058.4316-4.7442.8613-2.7207 1.3145c.0103.1232-1.0996 3.2148-1.0996 3.2559l-1.334.8828.5742 1.7148.7188 1.582-1.4375.5645-2.3106.5762-1.7246 1.2929-.289 2.0039 1.1504 2.1563-.1426 2.0117-1.0078.2871-3.1524-1.1484-2.4648-1.1504-1.8692.5742-2.0214 1.582-.7188 1.6934 1.4375 2.2598-.8008 1.6133-.207 2.8437-2.2285 1.377-1.0782 1.1699 7.1172.041 6.1934-.5742 7.291-.1231.205-3.75 3.4396.0215 4.1288-.4512 14.0489-1.582Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="KY_W_label" x="658.7942"
                                                y="1133.4" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="KY_W_tspan"
                                                x="658.7942" y="1133.4" fill="#000000">KY</tspan>
                                        </text>
                                    </g>
                                    <g id="KY_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="KY_E" className="state ky"
                                            d="m669.6055 1098.9492-2.0528.668-3.7382.1035-.5137 2.6699 1.0273 1.293.1836 1.3867-2.1758 1.5195-3.3691 1.459-2.6191.4102-.6153 4.3144-1.4863 1.0645 12.58 33.248 20.1856-1.9023 6.4492-1.6035 5.0332-3.0196 3.9024-1.9296.0508-1.8477 1.078-1.541 4.3849-4.8574 3.1835-3.5645 2.0547-2.1152-.0215-.0098-2.1875-1.4785-1.621-3.2246-3.6973-3.041-.6875-2.0528-2.3105-1.3769-.7208-1.416-.1015-5.0332-2.3614-1.8477-1.828-.9453-.5762-2.5059-1.6739.6172-2.33 1.2735-1.5098 1.8281-2.3008-.1856-4.6621-.5136-2.3203 1.1289-1.4395.1445-1.8164-1.9707h-4.5703l-1.8281-3.873Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="KY_E_label" x="658.7797"
                                                y="1133.4163" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="KY_E_tspan"
                                                x="658.7797" y="1133.4163" fill="#000000">KY</tspan>
                                        </text>
                                    </g>
                                    <g id="AL_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AL_S" className="state al"
                                            d="m676.5527 1220.5566-51.252 3.2539-.1503 5.7754-.1445 12.5098 2.4453 16.6758 1.334 12.7344v.041h2.4433l.5762.1445 1.1504-2.4434 1.293-3.8828 2.0136.5743 2.7422 5.3105v.8516l-2.4648 1.7265 2.4648.2871 4.9277-2.2793-.5117-7.0664-2.3008-1.7246-1.5918-1.5722.2051-2.5665 9.2832-1.2539 22.7461-2.5878 6.0606-.5743 4.9804.3086-.287-2.5683-1.295-.7188-.5742-.7187.7187-2.1563-.289-4.7246-1.4375-3.9023.1445-1.7149.4414-2.875 1.582-4.3125-.1347-1.8691-1.7442-.7188-.4316-3.0195-2.3105-3.0195Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AL_S_label" x="652.8641"
                                                y="1228.6117" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AL_S_tspan"
                                                x="652.8641" y="1228.6117" fill="#000000">AL</tspan>
                                        </text>
                                    </g>
                                    <g id="AL_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AL_N" className="state al"
                                            d="m665.5078 1178.2812-39.6387 3.2247-.1445 5.6992.1445 14.7871-.5683 21.8183 51.252-3.2539-1.2169-3.6933-1.3047-6.1621-1.4375-4.3125-1.293-5.4629-2.1562-8.7598-3.041-7.0449-.5742-3.0195-.1543-1.8692Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AL_N_label" x="652.8467"
                                                y="1228.5668" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AL_N_tspan"
                                                x="652.8467" y="1228.5668" fill="#000000">AL</tspan>
                                        </text>
                                    </g>
                                    <g id="LA_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="LA_E" className="state la"
                                            d="m575.6875 1263.1719-.0938 24.3672.961.1933 1.295 2.1563.3066 2.0234 4.0273.2871 1.58 1.582-.7187 1.4376-1.1504.7187 1.4375 1.4375 7.498 3.1523 3.1622-1.1503.8633-2.1563 2.3105-.5742 1.5918-1.3047 1.1504.8633.7188 2.5879-2.0137.7187.586.5645 3.0292-1.1504 2.0137-3.0196.7187-.4414-1.8691-.2871.7188-1.4375-.1446-1.3047 1.8692-.4316 1.0058-1.1289.5762.7188s-.1432 2.7207.586 2.7207c.7188 0 3.7362.5761 3.7362.5761l3.5958 1.7442.8613 1.2851h2.5996l1.0059.8613 2.0117-2.7421v-1.293h-1.129l-3.039-2.4434-5.1875-.7187-2.875-2.0235.9961-2.4453 2.0137.2891.1426-.5762-1.5801-.8633v-.4296h2.875l1.5918-2.7227-1.1504-1.7148-.2871-2.4434-1.3047.1426-1.7149 1.8691-.5742 2.291-2.7324-.5859-.8633-1.5703 1.5918-1.7266 1.705-3.0801-.9452-2.125-1.0254-3.5429-.0313.0508-2.9277-2.8145.8945-4.8887-.586-.8008-8.2558.9043Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="LA_E_label" x="560.5552"
                                                y="1266.9308" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="LA_E_tspan"
                                                x="560.5552" y="1266.9308" fill="#000000">LA</tspan>
                                        </text>
                                    </g>
                                    <g id="LA_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="LA_W" className="state la"
                                            d="m579.5644 1223.0039-49.4277.8223.0313 8.5019.6172 8.3399.6152 3.4492 2.2285 3.6562.8223 4.4668 3.8613 4.8789.205 2.8438.6153.6172-.6152 7.4961-2.67 4.4883 1.4376 1.8281-.6172 2.2383-.6153 6.5-1.2109 2.8457.1016 3.2129 4.1797-1.3555 10.7831.207 9.2227 3.1524 5.75 1.0058 3.3281-1.293 2.875.9961 2.875.8614.7188-1.8477-2.875-1.0273-2.3008.4414-2.4648-1.4375s.1548-1.1511.7402-1.2949c.575-.1438 2.7305-.8614 2.7305-.8614l1.582 1.293 1.5918-.8731 1.914.3829.0938-24.3672-.8574.0156-.6172-2.1348.8223-7.5175 2.9375-5.2891 4.4882-7.7227-.5136-2.125 1.1289-.6172.4101-1.7246-2.0527-1.8281-.1035-1.7246-1.623-3.873Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="LA_W_label" x="560.4991"
                                                y="1266.9425" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="LA_W_tspan"
                                                x="560.4991" y="1266.9425" fill="#000000">LA</tspan>
                                        </text>
                                    </g>
                                    <g id="MS_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MS_S" className="state ms"
                                            d="m625.6563 1218.2852-45.0957.1523.1835 2.7383-1.1894 2.1972.1015 5.3106 1.6426 3.6562.1035 1.9102 2.0547 1.8477-.3906 1.705-1.1094.586.4102 2.1562-4.6621 8.1426-2.7735 5.0332-.7793 7.4453.6778 1.9707 21.873-.3281 7.045-.7813 1.6425-.205.6172.8222-1.0273 4.9297 3.0605 2.8438 1.0274 3.4511 1.0058 2.2168.9766-.6972 2.3105-3.7188 1.5703.7188 6.0586-1.7442 1.8692.3067 1.3144.7187h4.6016l.2363-1.1289-.0215-.0098-1.3046-11.9121-2.463-16.6679.1426-12.4981Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MS_S_label" x="604.8266"
                                                y="1232.675" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MS_S_tspan"
                                                x="604.8266" y="1232.675" fill="#000000">MS</tspan>
                                        </text>
                                    </g>
                                    <g id="MS_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="MS_N" className="state ms"
                                            d="m625.7754 1181.4746-33.2715 3.4512-.1348.791-2.084 1.0977-2.5664 4.9492.2461 1.4804.2051 1.4883-2.5058 1.1914-3.2871 4.7246.5761 2.1036-2.2285 1.8183-1.3965 5.8125-.4101 1.4688 1.3847 2.2187-1.334 1.3145 1.5704 2.7422.0215.3105 45.0956-.1523.4278-16.4356-.1426-14.7891Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="MS_N_label" x="604.8215"
                                                y="1232.6754" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MS_N_tspan"
                                                x="604.8215" y="1232.6754" fill="#000000">MS</tspan>
                                        </text>
                                    </g>
                                    <g id="IA_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IA_S" className="state ia"
                                            d="m580.7012 1049.5449-86.5899 4.5254.1758.4844.8223 4.2734 2.0527 3.2442.6172 4.6836 1.416 3.6562.205 5.9043 1.8282 4.0039.8223-.1523 58.5664-2.2403 1.1289 2.1875 2.1973 2.7735 1.3867-.9961-.2559-1.8789.2676-1.2012 1.4375-.9766 1.6621-.4101-.1016-2.4649.6875-1.4589 1.5723-1.3555.2559-3.5938-1.6426-1.4902-.6367-1.2305 1.2324-3.4316 4.9707-1.6426 1.5195-.4922 1.9297-1.4375.7188-2.4336 1.4082-2.8769.6152-3.0391Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IA_S_label" x="537.541"
                                                y="1052.9423" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IA_S_tspan"
                                                x="537.541" y="1052.9423" fill="#000000">IA</tspan>
                                        </text>
                                    </g>
                                    <g id="IA_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IA_N" className="state ia"
                                            d="m564.2734 1021.7129-73.6328 1.1309h-1.5195l-.8203 2.2285.4101 2.4238 2.4434 1.8477-1.2324 5.0624-1.7442 4.3145 1.4375 2.4336 1.211 1.9297 1.0273 4.7656 2.2578 6.2207 86.5899-4.5254-.3457-1.1914-3.3887-3-.4531-1.6426-.8516-1.0879-1.9922-.5136-.2343-2.4649-.588-.709-2.7304-.4511-2.2598-1.1504-2.2383-3.3692-.1757-2.8554 1.8085-3.0078-.2265-1.2735-1.9922-1.3867Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IA_N_label" x="537.4521"
                                                y="1052.9602" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IA_N_tspan"
                                                x="537.4521" y="1052.9602" fill="#000000">IA</tspan>
                                        </text>
                                    </g>
                                    <g id="OK_E_group" transform="translate(-16.762089,-804.91929)"><text id="OK_E_label" x="468.0929"
                                        y="1183.0177" style={{ display: 'none' }}>
                                        <tspan style={{
                                            fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                            , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                        }} dy={0} id="OK_E_tspan"
                                            x="468.0929" y="1183.0177" fill="#000000">OK</tspan>
                                    </text>
                                        <path id="OK_E" className="state ok"
                                            d="m485.6914 1150.6367-6.2441 64.1113.9668.3184 1.2304-.6172 1.623-3.6445h1.0274l1.0059 1.8281 3.666.6152 3.2871 1.2129 2.6387.8203 1.623-.8203.6153-2.2402h3.873l1.8281.8223 2.4434-1.8496h1.0273l.6153 1.4394h3.6562l1.4375-1.8281 1.6133.4101 1.8477 2.2286 2.8554 1.623 2.8438.8203 1.746.9863-.3593-33.0664-1.2324-9.7558-.1328-7.8887-1.2832-5.8105-.6895-6.3887-.0605-3.3887-10.8243.2871Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" />
                                    </g>
                                    <g id="OK_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="OK_W" className="state ok"
                                            d="m390.3203 1146.2715-.791 9.7344 18.2383 1.0273 28.5488 1.1602-2.0742 21.7109-.4102 15.8457.2051 1.4375 3.8711 3.2344 1.8477 1.0273.6171-.2051.6153-1.8281 1.2129 1.6211h1.8281v-1.2324l2.4434 1.2324-.4102 3.4512 3.6758.2051 2.2383 1.0273 3.666.5957 2.2402 1.6426 2.0528-1.8477 3.041.6153 2.2578 3.0507h.8222v2.0235l2.0235.6152 2.0332-2.0527 1.6426.6152h2.2285l.8222 2.2383 4.6407 1.5312 6.2441-64.1113-18.711-.1855-40.1327-1.8282-21.6485-1.2324-.0195.0098Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="OK_W_label" x="468.4059"
                                                y="1182.9805" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="OK_W_tspan"
                                                x="468.4059" y="1182.9805" fill="#000000">OK</tspan>
                                        </text>
                                    </g>
                                    <g id="UT_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="UT_S" className="state ut"
                                            d="m304.4023 1088.3203-72.2265-11.6035-9.2774 50.6074 74.6172 10.5567Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="UT_S_label" x="268.024"
                                                y="1086.4302" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="UT_S_tspan"
                                                x="268.024" y="1086.4302" fill="#000000">UT</tspan>
                                        </text>
                                    </g>
                                    <g id="UT_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="UT_N" className="state ut"
                                            d="m241.2383 1027.2793-9.0625 49.4375 72.2265 11.6035 4.0196-28.918-7.3125-.7597-14.623-1.6114-6.9434-.8222 2.0547-11.707 1.3144-9.4473Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="UT_N_label" x="268.0495"
                                                y="1086.541" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="UT_N_tspan"
                                                x="268.0495" y="1086.541" fill="#000000">UT</tspan>
                                        </text>
                                    </g>
                                    <g id="AZ_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AZ_S" className="state az"
                                            d="m290.1055 1188.8926-80.3653-12.3242-.0996 1.9804-1.4375 1.2324-3.0508 1.5196-1.7246 1.7246-1.3359 3.2441-.5137 4.3653-2.5351 2.4336-1.8282.6171.123.7383-.412 1.5196.412.7207 3.256.5117-.5137 2.4238-1.336 1.9316-3.334.8165-2.334 1.914-.289 1.2949.4316.8633 16.8418 9.4883 10.8145 6.7461 13.1035 7.6211 14.9942 8.9141 10.9355 2.1562 22.2344 2.4023Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AZ_S_label" x="248.4442"
                                                y="1186.1655" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AZ_S_tspan"
                                                x="248.4442" y="1186.1655" fill="#000000">AZ</tspan>
                                        </text>
                                    </g>
                                    <g id="AZ_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AZ_N" className="state az"
                                            d="m222.9082 1127.252-2.752 14.582-1.4375.0215-1.5195 2.3418-2.2597-.1035-1.131-2.4336-2.4335-.3086-.8203-1.0254h-.8008l-.8223.5117-1.7246.9258-.1035 6.1914-.205 1.5097-.5137 11.1934-1.336 1.9199-.4922 2.9492 2.4336 4.3731 1.1309 5.1875.6973.9238.9238.5137-.002.043 80.3653 12.3242 7.4101-51.043Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AZ_N_label" x="248.4256"
                                                y="1186.1904" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AZ_N_tspan"
                                                x="248.4256" y="1186.1904" fill="#000000">AZ</tspan>
                                        </text>
                                    </g>
                                    <g id="NV_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NV_S" className="state nv"
                                            d="m228.3027 1097.8242-71.0761-5.1719 45.7793 68.8789 2.1562.9551 1.2852-1.8691.3066-7.6289.33-5.1348.2755-6.039 2.4648-1.459.9258.0527.6875.9746 2.33.3281 1.3048 2.4336h2.1152l1.4082-2.1347 1.6426-.3282Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NV_S_label" x="194.8744"
                                                y="1099.0881" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NV_S_tspan"
                                                x="194.8744" y="1099.0881" fill="#000000">NV</tspan>
                                        </text>
                                    </g>
                                    <g id="NV_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NV_N" className="state nv"
                                            d="m158.3652 1008.8262-16.9238 60.0761 15.7852 23.75 71.0761 5.1719 12.9883-70.6406Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NV_N_label" x="194.8547"
                                                y="1099.0692" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NV_N_tspan"
                                                x="194.8547" y="1099.0692" fill="#000000">NV</tspan>
                                        </text>
                                    </g>
                                    <g id="OR_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="OR_E" className="state or"
                                            d="m166.1133 936.8887-23.7305 68.1894 56.4121 13.1641.0313.0215 7.877-30.9414.9237-3.7696 2.1055-4.9902-.5449-1.0273-2.2578-.0508-1.1309-1.5.4121-1.295.4414-2.875 3.963-4.8886 1.623-.9746 1.0273-1.0274 1.3145-3.162 3.5937-5.0528 3.1836-3.4297.2051-3.082-2.9063-2.1758-1.5918-4.129-11.2949-3.2148-13.4336-3.1523-13.7597.1035-.3906-1.2324-4.8887 1.8476-3.9746-.5136-2.1563-1.416Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="OR_E_label" x="154.3978"
                                                y="972.241" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="OR_E_tspan"
                                                x="154.3978" y="972.241" fill="#000000">OR</tspan>
                                        </text>
                                    </g>
                                    <g id="OR_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="OR_W" className="state or"
                                            d="m130.9453 915.8672-5.164 1.8281-2.004 5.75-2.875 8.9043-2.8964 5.75-4.457 12.5098-5.7716 12.0664-7.209 11.1933-1.7245 2.5977-.7188 7.6191.3379 10.7422 43.92 10.25 23.7304-68.1894-.0762.041-4.1602-.205-1.541-1.2325-4.6718-1.8281-.7188.1035-3.8613-1.3145-1.7461 1.6211-5.4941-.3066-5.2989-3.6563.6172-.7187.205-6.9024-2.0546-3.4609-3.6563-.5117-.6152-2.2403Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="OR_W_label" x="154.3031"
                                                y="972.2423" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="OR_W_tspan"
                                                x="154.3031" y="972.2423" fill="#000000">OR</tspan>
                                        </text>
                                    </g>
                                    <g id="WA_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WA_E" className="state wa"
                                            d="m180.5508 875.334-23.543 58.8574 3.3496 1.3418 1.5195 1.2012 4.211.123 1.17-.584 1.9003 1.4063 4.1074.6562 4.9805-1.9297.4121 1.1915 13.586-.0313 13.8124 3.1836 11.0899 3.1328 12.1484-56.5234-13.5762-2.8438-20.4355-5.0332Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WA_E_label" x="168.6842"
                                                y="905.8612" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WA_E_tspan"
                                                x="168.6842" y="905.8612" fill="#000000">WA</tspan>
                                        </text>
                                    </g>
                                    <g id="WA_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WA_W" className="state wa"
                                            d="m157.2656 868.998-.0097.0313-1.0059.7188-.2773.7187 2.1562 4.3125 1.0059 2.3008-1.5801 3.1523v2.002l.5742 1.2949-.7187 1.5703.4316 2.875.8613 1.1504-.1425 1.1504-1.3145.1543-.5762-1.7461-1.0058-2.1563-1.582-1.293.2773-1.869 2.0137-.4415-.2774-1.582-.3086-.9961-1.8477 1.129-1.1503 1.0272v2.1368l-2.0235.1426-3.0195-.8516-2.5977-1.295-2.7324-.5741-4.0254-1.8692-2.875-1.7246-2.4648-2.291-2.1563-2.588-1.8789-.4316-2.0039 8.3184 1.541 2.875v7.0156l-.5742 2.5977 1.293 6.3144 2.4648 2.4454-3.9023.5742-.1446 3.3066 2.3008 1.0078-1.4375 3.5938-2.4433.287-.2871 2.588 2.0117 2.8555 3.1836-1.088 2.0137.4102.6152 2.2383 3.666.545 2.0332 3.4198-.1016 6.8282-.6894.8222 5.2793 3.666 5.586.2676 1.6952-1.6133 3.9024 1.3555.6465-.1328 1.3437.5371 23.543-58.8574-3.1367-.8828-7.629-1.7266-8.6464-2.4434Zm-4.836 4.959-1.3769 1.4395-.4316-1.2324-1.7754.1328-.0313-.0098.4317 2.2578 1.3652 2.0137.6368-.5742.3085-1.295 1.5098.4922s-1.2832 2.0025-1.2832 2.3106c0 .2773.7793.207.7793.207l1.2324-.371.6465-1.797-.5742-.7187 1.3652-1.5-.7187-1.3555Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WA_W_label" x="168.6714"
                                                y="905.8655" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WA_W_tspan"
                                                x="168.6714" y="905.8655" fill="#000000">WA</tspan>
                                        </text>
                                    </g>
                                    <g id="CA_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="CA_S" style={{
                                            fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none',
                                            fill: 'none', fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551',
                                            strokeLinecap: 'round', strokeLinejoin: 'miter', strokeMiterlimit: '3.999',
                                            strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)',
                                            stopOpacity: 1, pointerEvents: 'visible', display: 'none'
                                        }} className="state ca"
                                            d="m188.629 1140.0176-83.381-16.4727.672 2.1465 1.16 2.7207 3.0294 5.166 1.293 2.3008.4316 2.5879 1.4375.8613v2.1582l-.7188 1.7246-1.58 6.3262-.4317 1.7246 2.1563 2.4336 3.748.4317 4.0254 1.5722 3.461 1.8692h2.5878l2.5977 2.7304 2.291 4.3145 1.0059 2.0215 3.4707 1.8691 4.3144.7188 1.3028 1.8496.5761 2.875-1.2832.5859.2871.8516 2.875.7187 2.4649.1445 2.8027-1.5 3.461 3.7383.7187 2.0137 2.3008 3.7363.287 2.877v8.3183l.4317 1.5918 8.9356 1.293 17.5605 2.4434 12.3438 1.2129-.0313-.0098 3.4922-.4317 1.334-1.7871.4824-2.6191-3.162-.5137-.463-.6152.4102-1.7969-.1328-.5137 1.7148-.5546 2.7012-2.5274.5137-4.4355 1.2324-3.0293 1.746-1.9199 3.1212-1.418 1.4785-1.4375.0722-1.8496-.8925-.5117-.9043-.9668-1.0274-5.1954-2.4023-4.2929.5137-3.1211-2.1563-.9258Zm-69.1134 22.5195-1.0879.5762.0196.0097.7187 1.295 1.4395 1.4375 4.0351.205.7793-.5761-2.7207-1.0782Zm-2.8125.5762-2.9492.0605.5664 1.295.5137 1.0781 2.875.082.1426-1.1504Zm21.1035 16.3906-.9257.1328v1.0781h-.0098l1.5918 2.084.7187.8731 1.377.5136.5137-1.3046-.873-1.5801Zm-2.2187 8.9023-.4316.0723v1.9512c0 .3492.6367 1.6426.6367 1.6426l1.1504 1.0683 1.3047-.2051-1.0899-1.7246-1.58-2.7949Z"
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="CA_S_label" x="143.6217" y="1131.1129" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="CA_S_tspan"
                                                x="143.6217" y="1131.1129" fill="#000000">CA</tspan>
                                        </text>
                                    </g>
                                    <g id="CA_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="CA_N" className="state ca"
                                            d="m98.4434 994.8594-1.336 4.211-.1523 6.6132-4.6016 10.4941-2.7324 2.3008-.2871 1.0078-1.582.7188-1.3028 3.7363-.7187 2.877 2.4648 3.7265 1.4375 3.7383.9961 3.1523-.289 5.752-1.5801 2.7305-.5762 5.166-.873 3.3066 1.6035 3.4512 2.4433 4.0254 2.0235 4.3125 1.1601 3.5957-.287 2.875-.2892.4101v1.879l5.0332 5.5976-.4316 2.1563-.5742 2.0136-.586 1.7442.1426 7.3125 1.8809 3.3066 1.7246 2.3008 2.4434.4316.873 2.4434-1.0059 3.1641-1.8691 1.4375h-1.0059l-.7187 3.4394.4316 2.5977 2.875 3.8828 1.4375 4.7539.6329 2.0234 83.3808 16.4727-47.2598-71.1153 16.8418-60.0761Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="CA_N_label" x="143.4025"
                                                y="1130.8634" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="CA_N_tspan"
                                                x="143.4025" y="1130.8634" fill="#000000">CA</tspan>
                                        </text>
                                    </g>
                                    <g id="TN_C_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TN_C" className="state tn"
                                            d="m662.6523 1178.2383 11.498-31.875-33.3593 3.2148-14.039 1.5821-4.1075.4609-3.461-.0195-.205 3.6445-.6562.0215 2.0507 27.0019Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TN_C_label" x="647.754"
                                                y="1165.6382" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TN_C_tspan"
                                                x="647.754" y="1165.6382" fill="#000000">TN</tspan>
                                        </text>
                                    </g>
                                    <g id="TN_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TN_E" className="state tn"
                                            d="m719.125 1139.5039-2.3203 1.8066h-6.254l-16.328 2.1368-7.1895 1.6933v-.0195l-12.8828 1.2422-11.498 31.875 20.7753-1.9805.3496-3.5215 1.6133-1.3359 2.5352-.6563.6172-3.2871 3.6347-2.414 3.6153-1.334 3.6464-3.1641 3.9434-1.7969.4824-2.7304 3.6153-3.5332.4824-.1035s.0292 1.0273.748 1.0273c.7189 0 1.7266.3086 1.7266.3086l2.0234-3.1836 1.8477-.5859 2.0234.2461 1.416-3.1426 2.6407-2.3399.3691-1.7265.2774-3.3067Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TN_E_label" x="647.8525"
                                                y="1165.627" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TN_E_tspan"
                                                x="647.8525" y="1165.627" fill="#000000">TN</tspan>
                                        </text>
                                    </g>
                                    <g id="AR_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AR_S" className="state ar"
                                            d="m588.7598 1189.752-66.4024.7929.1602 26.1231 2.0332 1.7461 2.6386-1.2325 2.4454 1.0274.6152 5.832 49.5508-1.0058 1.0273-1.8497-.2578-3.1621-1.6426-2.6504 1.4375-1.3144-1.4375-2.2383.6153-2.2285 1.2324-4.9707 2.2383-1.8477-.6153-2.0136 3.2871-4.7735 2.4336-1.2324-.1035-1.3144-.3086-1.6231Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AR_S_label" x="556.0433"
                                                y="1193.7135" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AR_S_tspan"
                                                x="556.0433" y="1193.7135" fill="#000000">AR</tspan>
                                        </text>
                                    </g>
                                    <g id="AR_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="AR_N" className="state ar"
                                            d="m589.5254 1157.6289-69.8633 2.2383 1.418 6.1016v7.3105l1.2324 9.7559.045 7.5097 66.4023-.7929 1.4941-2.9278 2.1367-1.1289.0508-3.0293.0176-2.1953-1.8926-2.8535 2.9961-1.8633.289-2.2988 1.2012-3.8828.3575-2.4121-.0215.0097-3.5528.6367-4.5488-.5644.3691-1.4395 2.67-2.2578.8222-3.2656Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="AR_N_label" x="555.9852"
                                                y="1193.7645" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="AR_N_tspan"
                                                x="555.9852" y="1193.7645" fill="#000000">AR</tspan>
                                        </text>
                                    </g>
                                    <g id="NY_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NY_N" className="state ny"
                                            d="m808.459 956.5137-6.7363 1.8476-4.0371 1.295-2.875-.1544-4.8985 1.1504-2.7422 1.0977-2.1562 1.6445-1.879 2.1563-2.4335 3.2851-2.588 4.0274-1.3046 2.5879-.5762.7187-5.1758 4.8867.1446 2.3008.7187 1.0059 1.5918.7187h1.582v1.295l-1.0078 1.869.2891 1.293 1.293 1.8692-.1426 2.0137-1.7266.996H771.92l-1.4375 1.7462-1.5918 2.875-1.8476 1.582-4.623.4316-2.3204 1.0059-1.8477 1.1504-1.4375-.1543-1.746-1.1309-5.629.1446-2.875.4316-3.5937 1.1504-3.8828 1.293-2.5977 1.5918 1.7149 5.4433 1.5918.1445 1.1504 2.7305.1445.8633-1.0078.8613-1.8887 2.4453-.4101 1.4375-1.7461 1.5821-1.582 1.0058-.8633 1.4375-1.1602 1.0059-1.2617.9863.6465 5.752 6.7168-1.0899 38.3046-7.7519 17.2715-3.9024 2.1875 2.4024 3.082-.0723 1.4376 5.4434 2.0117 1.7246 2.3008.1543 1.0273.8633.0098-.0723 3.3183 1.582 3.4493 1.0059 3.1894.6914 4.2227-1.7266.6191-1.2344v-7.1894l-1.3047-6.4688-.7187-3.164-.7188-4.877.4414-9.623.4727-4.5176-2.7324-9.7559-.5957-.289-2.5665-1.1485.7188-2.5879-.7188-1.869-2.3007-4.0274.8535-3.4493-.7188-4.6015-2.1582-5.75Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NY_N_label" x="793.2296"
                                                y="1005.9607" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NY_N_tspan"
                                                x="793.2296" y="1005.9607" fill="#000000">NY</tspan>
                                        </text>
                                    </g>
                                    <g id="TX_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TX_E" className="state tx"
                                            d="m484.4082 1319.8438-2.8047 3.164-3.0996 4.8067-2.9375 6.1093-1.377 7.3125.5137 6.2637 2.4336 6.3867.5117 6.3125.7832-.2012-.1445-1.2949-.4316-4.5996-2.289-6.3887-.7911-5.4628.2871-4.5899 1.7871-5.8945 3.9024-5.8125 4.2421-5.9063Zm-48.6953-121.4532 1.4297 131.1328.9707 1.3614-.9238 3.1132.0136 1.127.336.5039 1.1504.5742-.2891 3.0196-.5742.5761.5742 2.002 2.877 1.7246 1.1601 5.7519 1.8691 3.459 6.7559 3.0196 4.621.9961 3.75 2.7324 2.875.5742 1.1505-.4414 4.9082 1.0273 5.0312 3.4414 2.7422-1.7265.873-1.293-1.582-2.4453-.873-5.4727-1.58-6.1621-.7188-2.1562.7187-4.0254 1.0059-3.4414 1.1504-4.0254 1.3047-4.8867-2.0235-1.7266.8633-1.7246 3.5938-.2871 3.4609-4.8887 3.0195-.5762 5.1856-3.1621 1.5703-1.2949 5.6172-3.0293 5.0527-2.1562 4.7559-2.875 2.4648-1.8477 5.0313-4.7461 1.1503-.7187 1.8692-1.3028 2.3008-1.7168.873-1.7246 8.7793-4.0254 5.0527-1.4062-.2578-3.1113 1.336-2.9786.5957-6.5722.5644-2.0957-1.3652-1.9102 2.5664-4.4668.6582-7.4453-.668-.6992-.1738-2.793-3.7695-4.9297-.8008-4.3945-2.3926-3.9336-.6172-3.2031-.6152-8.4727.041-8.6269-.5137-5.4219-2.3926-1.0273-2.7109 1.1816-2.1777-1.7656-1.3555-.7188-2.5469-.7187-3.121-1.8184-1.7461-2.1269-1.6641-.3594-1.3555 1.8086h-3.6152l-.75-1.4375-.9844-.041-2.496 1.8691-1.6134-.8223-3.9726-.041-.6172 2.2383-1.6426.8633-3.0508-1.0586-2.9765-.9961-3.5137-.5957-1.0879-1.8281-.8008-.0703h-.3086l-1.334 3.7168-1.4082.6777-5.6484-1.8887-.8203-2.1582-1.9824-.0293-1.9102-.5449-2.0547 1.8281-1.9707-.6992.1328-1.7461-.955-.2754-1.9825-2.8769-3.3261-.5332-1.8907 1.8476-2.125-1.8476-3.5214-.4727-2.5996-1.0586-3.6348-.1016.3086-3.5234-1.0274-.3594-1.4785-.8515v1.2734l-1.8789-.041-1.0273-1.6016-.3282 1.6211-1.0488.4942-1.7656-1.2832Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TX_E_label" x="435.8316"
                                                y="1254.808" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TX_E_tspan"
                                                x="435.8316" y="1254.808" fill="#000000">TX</tspan>
                                        </text>
                                    </g>
                                    <g id="TX_N_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TX_N" className="state tx"
                                            d="m388.205 1156.0273-1.4394 16.6563-3.459 49.3965-1.9824 17.1211 157.0742 19.3574-.0859-1.3887-3.7695-4.9297-.8008-4.3945-2.3926-3.9336-.6172-3.2031-.6152-8.4727.041-8.6269-.5137-5.4219-2.3926-1.0273-2.7109 1.1816-2.1777-1.7656-1.3555-.7188-2.5469-.7187-3.121-1.8184-1.7461-2.1269-1.6641-.3594-1.3555 1.8086h-3.6152l-.75-1.4375-.9844-.041-2.496 1.8691-1.6134-.8223-3.9726-.041-.6172 2.2383-1.6426.8633-3.0508-1.0586-2.9765-.9961-3.5137-.5957-1.0879-1.8281-.8008-.0703h-.3086l-1.334 3.7168-1.4082.6777-5.6484-1.8887-.8203-2.1582-1.9824-.0293-1.9102-.5449-2.0547 1.8281-1.9707-.6992.1328-1.7461-.955-.2754-1.9825-2.8769-3.3261-.5332-1.8907 1.8476-2.125-1.8476-3.5214-.4727-2.5996-1.0586-3.6348-.1016.3086-3.5234-1.0274-.3594-1.4785-.8515v1.2734l-1.8789-.041-1.0273-1.6016-.3282 1.6211-1.0488.4942-1.7656-1.2832-3.8711-3.4102-.0625-1.8477.2676-16.123 2.0742-20.8477-27.6856-1.0273-20.2324-.9551 1.0586-.0195Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TX_N_label" x="435.8293"
                                                y="1254.8463" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TX_N_tspan"
                                                x="435.8293" y="1254.8463" fill="#000000">TX</tspan>
                                        </text>
                                    </g>
                                    <g id="WI_E_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="WI_E" className="state wi"
                                            d="m594.0547 969.9492 1.3887 68.8496 18.9023-1.1054-.0195-.0215-.0723-2.8125-1.0566-4.0274-.5762-5.4629-1.0059-2.1562.8614-2.7207.7207-2.5879 1.3027-2.3008-.5742-3.0097-.5762-3.1622.4414-1.5918 1.7266-2.1562.1426-2.4453-.7188-1.1485.5664-2.291-.4121-3.6972 2.4649-5.0313 2.5683-6.0586.164-2.0039-.287-.8613-.7207.4316-3.7364 5.6055-2.4648 3.5957-1.7149 1.5918-.7187 2.0117-1.7461.7188-.9961 1.7265-1.295-.289-.1425-1.5703 1.1484-2.1563 1.8692-4.17 1.5918-1.4374.8847-2.084-2.291-1.6953-1.746-9.211-3.1837-1.1914-1.7246-2.0547Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="WI_E_label" x="586.2961"
                                                y="1004.756" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="WI_E_tspan"
                                                x="586.2961" y="1004.756" fill="#000000">WI</tspan>
                                        </text>
                                    </g>
                                    <g id="IL_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="IL_S" className="state il"
                                            d="m624.373 1109.707-38.9082 2.4004-.6015 3.1699-2.0235 5.2891-.6152 2.834 2.0332 3.4512 5.7188 4.6836 4.078.6152 1.8282 4.457 1.8477 2.8457-.8223 2.6387 1.418 3.6562 1.6426 1.8282 1.2324-.7715.8222-1.8477 1.9707-1.541 1.9004-.5547 2.3203 1.0586 3.2364 1.2324 1.0566-.2773.1856-2.002-1.1504-2.1367.2773-2.1152 1.6426-1.2012 2.6914-.7187 1.1289-.4121-.5547-1.2325-.6973-2.0937 1.2735-.8731 1.0254-2.8457-.0293-.041.0293-2.875.5136-4.1289 2.0547-2.5879 1.6739-3.6133 1.9921-3.5546Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="IL_S_label" x="599.2078"
                                                y="1090.1901" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="IL_S_tspan"
                                                x="599.2078" y="1090.1901" fill="#000000">IL</tspan>
                                        </text>
                                    </g>
                                    <g id="TN_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="TN_W" className="state tn"
                                            d="m620.373 1182.2695-2.0507-27.0019-6.6348.2148-6.1836.586-6.832-.0713-1.1127 1.0467-.5162 5.1867-1.5098 4.8769-.4805 2.4649-1.2011 3.8828-.2891 2.2988-2.996 1.8633 1.8925 2.8555-.0176 2.1933.0625 2.2598Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="TN_W_label" x="647.7603"
                                                y="1165.6294" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="TN_W_tspan"
                                                x="647.7603" y="1165.6294" fill="#000000">TN</tspan>
                                        </text>
                                    </g>
                                    <g id="VA_W_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="VA_W" className="state va"
                                            d="m763.1445 1134.0469 7.5137-52.6016-7.8164-3.0234-.082 4.498-2.4649 5.0625-2.3105 2.084-.9239 2.4336-2.4863.5137-1.7246 6.7363-3.4922.2578-1.9511-2.1562-1.1075.4726-.5449 5.082-4.7031 10.9161-.8945 1.664.8632 1.1309-.3086 1.8476-2.537 3.2657-1.6016-.4317-2.547 1.8907-2.3105-.4727-1.664 4.0566-3.4902 1.2618-2.2598-1.2012-2.002 1.1719-2.2597 1.0058-3.3692-.8515-3.5117-3.9864-9.416 10.2285-1.336 1.9004v1.8496l-9.3144 5 9.7246-1.4375 7.4668-.8632 6.541-.2051 2.3008-1.6934 5.957.3067 33.334-4.6934Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="VA_W_label" x="766.6024"
                                                y="1113.7848" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="VA_W_tspan"
                                                x="766.6024" y="1113.7848" fill="#000000">VA</tspan>
                                        </text>
                                    </g>
                                    <g id="NY_S_group" transform="translate(-16.762089,-804.91929)">
                                        <path id="NY_S" className="state ny"
                                            d="m820.3477 1031.4824-4.2227 1.7266.836.1816 2.5058 1.5098.1348 1.8691-.4121 2.4336.205 3.2852 1.0489.4629 3.5937-1.0059 5.1856-1.7265 2.3007-.8731 6.336-4.7227 3.461-2.5878 3.0194-3.1524-3.7382-1.4394-1.17 1.2949-2.5683 2.4336-7.0547 3.4609-2.0234-.1445-1.4375-.5645-1.0059.5762-2.0234 2.3105-1.3047 1.129-1.1504.3085-.2871-1.1503 1.7246-1.5821-.6973-1.4883-1.6426-1.7773Z"
                                            style={{
                                                fontVariationSettings: 'normal', opacity: 1, vectorEffect: 'none', fill: 'none',
                                                fillOpacity: 1, stroke: 'none', strokeWidth: '0.821551', strokeLinecap: 'round',
                                                strokeLinejoin: 'miter', strokeMiterlimit: '3.999', strokeDasharray: 'none',
                                                strokeDashoffset: 0, strokeOpacity: 1, stopColor: 'rgb(0, 0, 0)', stopOpacity: 1,
                                                pointerEvents: 'visible', display: 'none'
                                            }} data-originalstrokewidth="0.821551"
                                            fill="none" stroke="none" pointerEvents="visible" /><text id="NY_S_label" x="793.2355"
                                                y="1005.9497" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NY_S_tspan"
                                                x="793.2355" y="1005.9497" fill="#000000">NY</tspan>
                                        </text>
                                    </g>
                                    <g id="DE_N_group">
                                        <path id="DE_N" className="state de"
                                            d="m785.8136 256.8565-1.4375.3496-1.4375.4101-1.9511 1.5723 1.5195 4.4883 2.0137 5.0312 1.2011 5.5156 5.5977-1.8105-1.1816-3.1309-1.7149-3.1621-2.8027-2.5664-.7715-1.8496.3281-1.4375v.0098l.3301-1.9102Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="DE_N_label" x="820.1573" y="281.3484" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="DE_N_tspan"
                                                x="820.1573" y="281.3484" fill="#000000">DE</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m811.0224 278.0592-16.9192 1.0166" id="DE_N_line" />
                                    </g>
                                    <g id="DE_S_group">
                                        <path id="DE_S" className="state de"
                                            d="m791.2845 272.409-5.5977 1.8105.6778 3.1114 1.4375 5.5957 4.4668-.1426 5.4746-1.0488-2.0235-6.5723-.8633.4316-3.1836-2.1562Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="DE_S_label" x="820.0401" y="281.2319" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="DE_S_tspan"
                                                x="820.0401" y="281.2319" fill="#000000">DE</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m794.3079 278.9835 16.2831-.9819" id="DE_S_line" />
                                    </g>
                                    <g id="NJ_S_group">
                                        <path id="NJ_S" className="state nj"
                                            d="m805.157 256.1302-12.2325-6.75-2.168 1.9414-1.4374 2.0137-1.295 2.4434-2.0234 1.16-.4102 1.4376-.205 1.0684-.5547 2.3105.9746 1.9922 2.8965 2.5879 4.3125 2.0137 3.5957.5742.1543 1.2949-.7188.8613.2871 2.4453h.7188l1.8691-2.1562.7188-4.3145 2.4648-3.5937 2.7207-5.752Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="NJ_S_label" x="823.2396" y="260.3798" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="NJ_S_tspan"
                                                x="823.2396" y="260.3798" fill="#000000">NJ</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m801.6337 251.0216 13.631 5.9187Z" id="NJ_S_line" />
                                    </g>
                                    <g id="MD_W_group">
                                        <path id="MD_W" className="state md"
                                            d="m771.6428 290.6593-6.1778-28.371-4.3144.8143-33.375 6.7168 1.0273 4.4473.8516 5.0312.289-.2773 1.879-2.1563 2.0117-2.3203 2.1562-.5547 1.3047-1.2949 1.5918-2.289 1.1504.5644 2.5977-.3086 2.3007-1.8476 1.7871-1.295 1.6426-.4316 1.4688 1.0078 2.5976 1.293 1.7461 1.5722 1.0684 1.3555 3.6758 1.5098v2.5664l4.8886 1.1601 1.0274.4825 1.2636-1.7969 2.5664 1.7461-1.1288 2.207-.6875 3.543-1.582 2.3008v1.8496l.5741 1.5918 4.5196 1.2011Z"
                                            style={{
                                                fontVariationSettings: 'normal', fill: 'none', fillOpacity: 1, stroke: 'none',
                                                strokeWidth: '0.821551', strokeLinecap: 'round', strokeLinejoin: 'miter',
                                                strokeMiterlimit: '3.999', strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1,
                                                stopColor: 'rgb(0, 0, 0)', pointerEvents: 'visible', display: 'none'
                                            }}
                                            data-originalstrokewidth="0.821551" fill="none" stroke="none" pointerEvents="visible" />
                                        <text id="MD_W_label" x="812.2553" y="303.9161" style={{ display: 'none' }}>
                                            <tspan style={{
                                                fontStyle: 'normal', fontWeight: 400, fontSize: '11px', fontFamily: 'Arial'
                                                , textAlign: 'center', textAnchor: 'middle', fill: '#000'
                                            }} dy={0} id="MD_W_tspan"
                                                x="812.2553" y="303.9161" fill="#000000">MD</tspan>
                                        </text>
                                        <path style={{
                                            fill: 'none', stroke: 'white', strokeWidth: '1px', strokeLinecap: 'butt'
                                            , strokeLinejoin: 'miter', strokeOpacity: 1, display: 'none'
                                        }}
                                            d="m801.8958 296.9587-32.5604-23.6261" id="MD_W_line" />
                                    </g>
                                </g>
                                <path id="sidemap"
                                    d="M647.6245 644.1882v56.7986M670.334 585.29v59.0174M602.1572 585.29l.1907 59.0174m-52.5417.0916h189.8789m-189.8697 56.8628V585.1891h189.8513v115.7427"
                                    fill="none" stroke="#010101" strokeWidth=".5501" strokeDasharray="1.8, 0.6" style={{
                                        display: 'none'
                                        , stroke: 'rgb(1, 1, 1)'
                                    }} />
                                <path id="sidemap2"
                                    d="M371.8409 596.3838h177.9653m-274.0939 0h96.1286l1.0745 104.6855m-170.3005.2384.2751-104.933h72.285l.761 105.7765"
                                    fill="none" stroke="#010101" strokeWidth=".5501" strokeDasharray="1.11298, 0.556489"
                                    style={{ display: 'none', stroke: 'rgb(1, 1, 1)' }} />
                                <g id="g4906">
                                    <path id="HI" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m257.2139 518.946 1.7458-3.1527 2.0025-.308.2876.7188-1.8485 2.7317h-2.1771Zm9.0781-3.2862 5.4736 2.2798 1.869-.2875 1.4377-3.4402-.575-3.0192-3.7278-.4108-3.5943 1.5712-.873 3.3067Zm27.368 8.8933 3.3067 4.8883 2.1566-.2876 1.0064-.4313 1.2939 1.1502 3.317-.1438.8627-1.294-2.588-1.5814-1.7252-3.3068-1.869-3.163-5.186 2.588Zm18.0022 7.9075 1.1502-1.7253 4.1796.8626.5648-.4313 5.4736.5751-.2875 1.1502-2.3004 1.294-3.9024-.2876-4.8882-1.4377Zm4.7547 4.6006 1.7253 3.4403 2.7522-1.0064.2875-1.4377-1.4377-1.8485-3.317-.3081v1.1604Zm6.1925-1.0064 2.0127-2.5879 4.1797 2.1566 3.8818 1.0064 3.8818 2.4339v1.7252l-3.163 1.5815-4.313.8626-2.1566-1.2836-4.3337-5.8844Zm14.829 13.7918 1.4377-1.1501 3.0294 1.4377 6.7778 3.163 3.0192 1.8792 1.4377 2.1566 1.7253 3.8716 3.5943 2.3003-.2875 1.1502-3.4506 2.8754-3.7483 1.294-1.3042-.5751-2.742 1.5815-2.1565 2.8754-2.023 2.5879-1.5918-.1438-3.163-2.3003-.2875-4.0256.5648-2.1566-1.4377-5.032-1.8793-1.5815-.1438-2.29 2.0128-.8627 1.8793-2.7214.4313-.8626-1.4377-1.5712-.3081-1.869Z"
                                        className="state hi" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(1)}
                                        style={{ fill: selected.includes(1) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="HI_label" x="312.4868" y="557.8352" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="HI_tspan" x="312.4868" y="557.8352" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">HI</tspan>
                                    </text>
                                </g>
                                <g id="g4901">
                                    <path id="AK" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m190.3807 460.6056-.2875 75.8908 1.4377.8524 2.7419.1438 1.2837-1.0065h2.3106l.1438 2.5674 6.1924 6.059.4313 2.29 3.009-1.7252.5853-.154.2875-2.7317 1.294-1.4378 1.0064-.154 1.7252-1.294 2.742 1.8486.575 2.5981 1.7253 1.0064 1.027 2.1566 3.4505 1.5917 3.0294 5.3196 2.4647 3.4505 2.0025 2.4236 1.3042 3.3067 4.457 1.5815 4.6212 1.869.8523 3.8818.4108 2.7317-.8524 3.0192-1.5814 2.0128-1.4378-.7188-1.3042-2.7317-2.444-1.294-1.5816-1.0063-.7188.7188 1.294 2.4441.1437 3.3068-1.0064.4313-1.7458-1.7253-1.8485-1.1501.4108 1.4377 1.1604 1.5815-.7188.7188s-.7189-.2875-1.1605-.8626c-.4313-.5751-1.869-3.0192-1.869-3.0192l-.8626-2.0128s-.2876 1.1502-.8627.8626c-.575-.2875-1.1501-1.294-1.1501-1.294l1.5815-1.7252-1.294-1.294v-4.4569h-.7189l-.7188 3.0192-1.0064.4314-.8626-3.3068-.5751-3.3067-.7189-.4313.2773 5.032v1.0064l-1.2837-1.1502-3.163-5.3196-1.8793-.4313-.575-3.3067-1.4378-2.5674-1.4377-1.0269v-2.0025l1.869-1.1605-.4313-.2875-2.3003.5648-3.0295-2.1566-2.3106-2.5879-4.3131-2.3003-3.6148-2.3106 1.1501-2.8754v-1.4377l-1.5815 1.4377-2.5673 1.0064-3.3273-1.0064-5.032-2.1566h-4.9087l-.5751.4313-5.7509-3.4402-1.8793-.2876-2.4647-5.1757-3.163.2875-3.1834 1.294.4416 4.0255 1.0269-2.5879.8524.2876-1.3043 3.8818 2.896-2.444.575 1.4376-3.4607 3.8716-1.1296-.3081-.4416-1.715-1.1502-.7188-1.1502 1.0064-2.4646-1.561-2.7214 1.8485-1.5815 1.8793-3.0294 1.8793-4.19-.1438-.4313-1.8793 3.317-.575v-1.1297l-2.023-.5853.8729-2.1566 2.023-3.4403v-1.5815l.1438-.7188 3.9024-2.0128.8626 1.1502h2.4441l-1.1502-2.3004-3.317-.2875-4.4569 2.444-2.1566 3.0193-1.5917 2.3003-1.0064 2.0128-3.7483 1.2837-2.7317 2.3003-.308 1.4378 2.023.8523.7189 1.869-2.4442 2.8755-5.7714 3.738-6.9215 3.7278-1.869 1.0064-4.7548 1.027-4.765 2.0025 1.5918 1.1296-1.294 1.3043-.4313 1.0063-2.444-.8626-2.8755.1438-.7189 2.0128h-.8729l.2773-2.1566-3.163 1.1502-2.6084.8626-3.0192-1.1502-2.5982 1.7253h-2.8754L88.95 564.727l-1.4377.7188-1.869-.2875-2.3106-1.0064-2.023.575-.8627.8627-1.4377-1.0064v-1.7253l2.7214-1.1501 5.6173.575 3.9024-1.4376 1.8485-1.8485 2.5981-.5854 1.5918-.7189 2.4441.1438 1.4377 1.1297.873-.2773 2.0127-2.4441 2.7214-.8627 3.0295-.5648 1.1501-.2875.5751.4313h.7189l1.1604-3.317 3.5943-1.294 1.7458-3.2862 2.0128-4.0358 1.4377-1.294.2876-2.29-1.4377 1.1501-3.0295.5648-.5854-2.1565-1.1501-.2876-.8524.8626-.1438 2.5982-1.294-.1438-1.2939-5.1757-1.1501 1.1296-1.0064-.4108-.2876-1.7252-3.5943.1437-1.8793 1.0064-2.3106-.2875 1.294-1.294.4416-2.3003-.5751-1.7253 1.294-.8626 1.15-.1438-.575-1.5815v-3.8818l-.8729-.8626-.7188 1.294h-5.4736l-1.294-1.1502-.575-3.4505-1.8794-3.163v-.8627l1.8793-.7188.1438-1.8485 1.0064-1.027-.7189-.4107-1.1501.4108-1.027-2.4339.873-4.4672 4.0358-2.8754 2.3106-1.4377 1.7253-3.3068 2.4646-1.1501 2.3004 1.027.2875 2.1565 2.1566-.308 2.8754-2.1567 1.4377.5854.873.575h1.4376l2.0231-1.1501.7189-3.8716s.2875-2.5673.8626-3.0089c.575-.4313.8626-.8626.8626-.8626l-1.0064-1.7253-2.3003.7189-2.8755.7188-1.7457-.4313-3.163-1.5815-4.4672-.1437-3.163-3.3068.4108-3.4505.5854-2.1566-1.869-1.5815-1.7459-3.3067.4416-.7188 6.059-.4314h1.869l.8626.8627h.5751l-.1438-1.4377 3.4608-.5649 2.3004.3081 1.2939.9859-1.294 1.869-.4313 1.294 2.4442 1.4377 4.4671 1.5815 1.5918-.8627-2.023-3.8818-.8627-2.8754.8626-.7189-3.0192-1.715-.4313-1.027.4313-1.4376-.7188-3.4403-2.5982-4.1694-2.1566-3.7483 2.5674-1.7252h2.896l1.5814.575 3.7484-.1437 3.317-3.1835 1.0064-2.7112 3.3273-2.1565 1.4377.8626 2.4646-.575 3.2862-1.8691 1.027-.1438.8626.7189 4.0256-.1438 2.4647-2.7317h.996l3.163 2.1566 1.7459 1.869-.4416 1.0064.575 1.0064 1.4378-1.4377 3.4608.2876.2875 3.3067 1.7253 1.2837 6.3464.5854 5.6174 3.738 1.294-.8524 4.6212 2.3004 1.8793-.5648 1.7252-.7189 4.3337 1.7253 3.8818 2.5879ZM87.8306 486.3305l1.869 4.7444-.1438.8626-2.5878-.2875-1.5815-3.5943-1.5918-1.294h-2.1566l-.1335-2.3003 1.5815-2.1565 1.027 2.1565 1.294 1.294 2.444.575Zm-2.3004 29.7401 3.3068.7189 3.317.8626.7189.8626-1.4378 3.3068-2.7419-.1438-3.0192-3.163ZM67.0864 503.583l1.027 2.2901.996 1.4377-.996.7189-1.8793-2.7317v-1.7252h.8626Zm-12.2308 64.954 3.0294-2.0129 3.0192-.8626 2.321.2875.4312 1.4378 1.7253.4313 1.7253-1.7253-.2876-1.4377 2.4647-.5751 2.5673 2.3003-.9961 1.5815-3.9024 1.0064-2.4441-.4313-3.317-1.0064-3.9024 1.294-1.4377.2875-1.0064-.575Zm43.6449-4.0257 1.4377 1.7253 1.8793-1.4377-1.3042-1.1502Zm2.5879 2.7317 1.0269-2.0128 1.8485.2875-.7189 1.7253Zm21.0317-1.7253 1.294 1.5815.8728-1.0064-.7188-1.7252-1.4378 1.1501Zm7.7842-11.0601 1.0064 5.1655 2.5879.7188 4.4671-2.5673 3.9024-2.3106-1.4582-2.1566.4415-2.1566-1.8793 1.1605-2.5879-.7189 1.4378-1.0064 1.7458.7189 3.4505-1.5815.4313-1.2837-2.1566-.7188.7189-1.7253-2.4647 1.7253-4.159 3.163-4.3132 2.5878-1.1605 1.0064Zm37.7297-17.6634 2.1566-1.3042-.8524-1.5815-1.5815.8627.2876 2.0128Z"
                                        className="state ak" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(2)}
                                        style={{ fill: selected.includes(2) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="AK_label" x="152.2525" y="499.2401" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="AK_tspan" x="152.2525" y="499.2401" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">AK</tspan>
                                    </text>
                                </g>
                                <g id="g5076">
                                    <path id="FL" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m726.5147 447.6868 2.023 6.5107 3.317 8.6674 4.7548 8.3388 3.317 5.5968 4.3132 4.8985 3.5942 3.3067 1.4378 2.5674-.9962 1.1604-.7188 1.1502 2.5879 6.6032 2.5981 2.5879 2.3106 4.7444 3.1835 5.1758 4.0256 7.322 1.1502 6.747.4108 10.6392.5853 1.5814-.2875 3.009-2.1566 1.1501.2773 1.7253-.575 1.7253.308 2.1565.4108 1.7253-2.4442 2.8754-2.7316 1.294-3.4608.1437-1.3042 1.4377-2.1566.8627-1.1604-.4313-1.0064-.8627-.2876-2.5879-.7188-3.0192-3.0295-4.6007-3.1835-2.0127-3.4505-.2876-.7189 1.1502-2.7316-3.8818-.5854-3.1527-2.29-3.5943-1.5815-1.0064-1.4378 1.869-1.5917-.2876-1.869-4.4671-2.5982-3.4506-2.5879-4.7547-2.29-2.7316-3.1836-3.2862 1.8793-2.1566 2.8755-4.8882-.1335-1.4377-4.036-.8627-1.4376.5751.2875.575 2.3004.8627-1.294 4.0256-.7188.4313-1.5815-3.5942-1.1605-4.3132-.2875-2.4441 1.3042-4.1694v-8.4722l-2.742-3.2862-1.15-2.742-4.6213-1.1501-1.715-.5648-1.4377-2.3004-3.0295-1.4377-.9961-2.9987-2.4647-.8626-2.1565-3.3067-3.7381-1.294-2.5982-1.294h-2.3003l-3.5943.719-.154 1.7252.7188.8626-.4313 1.0064-2.742-.1438-3.317 3.1528-3.1834 1.7252h-3.4403l-2.8754 1.1605-.308-2.4442-1.4378-1.715-2.5879-1.0064-1.4377-1.2939-7.1886-3.4505-6.7778-1.5815-3.9023.575-5.3196.4314-5.34 1.869-3.0809.5443-.2054-7.1578-2.3209-1.7252-1.5814-1.5815.2875-2.7317 9.0781-1.1501 22.757-2.588 6.059-.5647 4.8266.2464 2.3106 3.4505 1.294 1.2734 7.2296.4416 9.6327-.575 19.1729-1.1502 4.8266-.5957 4.5596.1849.38 2.5673 2.0025.719.2054-4.1078-1.3555-3.697 1.1707-1.407 4.9395.534 4.6213.2774Zm11.173 117.6872 2.1567-.5649 1.1604-.2054 1.294-2.095 2.0949-1.4376 1.1502.4313 1.5096.2875.3594.9243-3.0808 1.0885-3.7586 1.294-2.0847 1.0783-.801-.7908Zm12.0358-4.4467 1.0783.9243 2.4441-1.8485 4.7547-3.7381 3.317-3.4505 2.2285-5.8946.8626-1.5096.1438-3.0193-.6367.4108-.8626 2.5263-1.294 4.1078-2.8754 4.6623-3.9024 3.7278-3.0192 1.7252-2.2284 1.3761Z"
                                        className="state fl" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(3)}
                                        style={{ fill: selected.includes(3) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="FL_label" x="733.7022" y="499.3993" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="FL_tspan" x="733.7022" y="499.3993" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">FL</tspan>
                                    </text>
                                </g>
                                <g id="g5122">
                                    <path id="NH" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m834.3022 183.9278.7805-.955.955-2.9269-2.2592-.8215-.4313-2.7214-3.4506-1.0064-.2875-2.4441-6.4697-20.8469-4.1078-12.9086h-.801l-.575 1.4377-.5752-.4416-.8729-.8626-1.2836 1.7253-.0411 4.4774.2875 5.032 1.7253 2.4441v3.5943l-3.3068 4.498-2.3106 1.0064v1.0064l1.0064 1.5815v7.6199l-.7188 8.1847-.154 4.3131.8728 1.1297-.1437 4.0358-.4416 1.5815.8831.6162 14.9523-3.923 1.9512-.534 1.643-2.4646 3.1836-1.4377Z"
                                        className="state nh" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(4)}
                                        style={{ fill: selected.includes(4) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NH_label" x="820.8544" y="178.9399" fontSize="8.4815" strokeWidth=".7065">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="NH_tspan" x="820.8544"
                                            y="178.9399" fontStyle="normal" fontWeight={400} fontSize="10.6011" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".7065">NH</tspan>
                                    </text>
                                </g>
                                <g id="g5046">
                                    <path id="MI" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m578.122 123.7697-2.0128.493-4.7958 3.471-1.9204.7188-1.643 1.828 1.4376 1.0064 1.8485-.8216 2.937-1.715 4.5802-4.5801-.4107-.4108Zm9.9613 12.6519-4.2104.4107-3.8716 2.1771-2.023 1.982-1.1605 1.602-1.5712.6984-1.7253 2.5879-.154 1.1604-3.9024 1.8485-2.1565 1.7458-5.3196.8626-.5853.5648v.8627l-3.1835 2.0128-2.4339.7188-.6367.5135 3.3375 4.5802 7.014 1.0063 7.3324 1.9204 2.5365.9243 10.7829 2.4646 1.8485 2.0026 3.163 1.2323 1.7252 9.1397 1.2323.9037 1.027.9243 2.8343-6.213.8832-3.5943 1.7252-3.8818.7189-.1232 1.0064 1.4377h.5648l4.0256-2.1771 1.3042 1.4377.4108.1643 1.1502-1.027 1.027-2.7213 2.1565-.7189 6.1924-.5956 1.7253-2.29 4.6212-.1541 5.1758 1.1604h1.5815l2.8754-1.3042 2.0333.154 1.869-.5648 3.317.4108.719.308 1.1604-.308-1.1605-.8524-1.1604-.5648-2.8754-2.7316v-6.1822l-1.3043-.4416-1.0063 1.027-5.4736 1.4377-1.715.4107-2.5879-.6983-.4416-.308v-5.0115l-1.3042-.1438-2.29 1.1502-4.036 1.7252-5.9151.267-3.009 1.027-3.5942 3.163-1.4583.8626h-1.0064l-1.1296.7188-1.4583-.4107-1.4377-1.1707-1.294.8626-3.4915.1438-2.4236-2.4647-1.3042-2.7317-1.2837-.9756-2.8754-.8523h-2.023l-1.1503-1.1605-3.1835 2.588-.8523 1.0063-.7189-.4416.267-2.2798 2.1566-2.8754.4518-2.1566 2.0231-.7188 1.2837-2.742 3.317-.8523.308-.8626-1.0269-.9859Zm59.2544 20.6106-1.9512.2054-1.4377.1643-.308 1.0064.8934.4108.5648 2.2593 2.8754.1335 1.1605-1.068s-.0822-1.3145-.3698-1.4583a12.9394 12.9394 0 0 1-1.4377-1.6431Zm-14.4798 8.2669-2.5982 1.561-2.5879 2.023.3081 3.1424.8524.2876 1.869.4518.4108.7189-2.2798.7189-2.3107.2772-1.3042 1.5815-.2772 1.8485.2772 1.4377.3081 4.8985-3.1835 1.869-.575-.154v-3.7483l1.1604-2.1566.5648-2.1566-.7189-.7188-1.715.7188-.8626 3.7484-2.4647.9858-1.5712 1.7458-.1437.8524.5648.7394-.5546 2.29-2.0128.4416v.9962l.7189 2.1565-1.027 5.4736-1.4171 3.5943.5648 4.1591.4416 1.0064-.7394 2.1566-.267.7188-.3081 2.4442 3.1835 5.34 2.5879 5.7509 1.3042 4.3131-.7188 4.1489-.873 5.3195-2.136 4.6007-.308 2.4338-2.896 2.7317 3.9023-.1232 19.1011-2.0026 6.4903-.8934.1027 1.4788 6.1-1.0578 9.1603-1.3658 3.4505-.3902.1232-.5546.1438-1.2734 1.869-3.3067 1.7766-1.5404-.2054-4.5186 1.4377-1.3966.9756-.308.2054-3.163 1.335-2.7009.9448.534.1438.5956.7188.1438 1.7459-.8626-.2876-8.4928-2.8754-7.3323-2.023-8.0513-2.1567-2.8548-2.3208-1.602-1.4378 1.0269-3.4505 1.5815-1.7458 4.4569-2.4338 3.3067-1.0064.5648-1.3145-.575s-2.3106-1.3043-2.1566-1.8793c.1335-.5649.4313-4.4364.4313-4.4364l3.0295-1.1605.6983-3.0089.5956-2.3106 2.136-1.4377-.267-8.9036-1.4582-2.0128-1.1501-.7188-.7189-1.869.7189-.719 1.4377.3081.1643-1.4582-2.1566-2.023-1.1707-2.2799h-2.3106l-4.005-1.294-4.8986-3.0088h-2.4646l-.5648.575-.8627-.4107-2.7522-2.0231Z"
                                        fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999" strokeDasharray="none"
                                        strokeOpacity={1} data-originalstrokewidth="0.8216" onClick={() => handleClick(5)}
                                        style={{
                                            fill: selected.includes(5) ? '#40FF62' : '#D6D6D6', cursor: 'pointer',
                                            stroke: 'white', strokeWidth: '0.8216'
                                        }} /><text id="MI_label" x="638.3407"
                                            y="222.1073" style={{ fontSize: '12.3233px', strokeWidth: '1.02694' }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="MI_tspan" x="638.3407" y="222.1073" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">MI</tspan>
                                    </text>
                                </g>
                                <g id="g5112">
                                    <path id="VT" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m801.9536 194.269.2773-4.7444-2.5674-9.5916-.5853-.2876-2.5879-1.1501.7189-2.588-.7189-1.869-2.3928-4.1077.8627-3.4608-.7189-4.6007-2.1566-5.7508-.7188-4.3748 23.5477-5.987.267 4.9087 1.7047 2.4339v3.5942l-3.3067 4.498-2.3004 1.0064v.9962l1.1502 1.3555-.2773 7.1886-.5443 8.236-.2053 4.9293.8729 1.1502-.1438 4.0667-.4313 1.4993.9242.647-6.6443 1.335-4.005.647Z"
                                        className="state vt" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(6)}
                                        style={{ fill: selected.includes(6) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} />
                                    <path d="m796.3773 130.2394 7.8356 25.8378-7.8253-25.8275Z" id="VT_line" stroke="#000"
                                        strokeOpacity={1} style={{ strokeWidth: '1.02694' }} /><text id="VT_label" x="796.1412"
                                            y="126.4736" fontSize="8.0984" strokeWidth=".6747">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="VT_tspan" x="796.1412"
                                            y="126.4736" fontStyle="normal" fontWeight={400} fontSize="10.1236" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".6747">VT</tspan>
                                    </text>
                                </g>
                                <g id="g5117">
                                    <path id="ME" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m871.7547 127.4153 1.7458 1.8485 2.0128 3.3067v1.7253l-1.8793 4.1694-1.7253.575-3.0295 2.7317-4.3131 4.8882h-1.1604c-.5751 0-.8627-1.869-.8627-1.869l-1.5815.1438-.8729 1.294-2.1565 1.2939-.873 1.294 1.4378 1.2939-.4313.575-.4314 2.4339-1.7252-.1438v-1.4274l-.2876-1.1502-1.2939.2876-1.5917-2.8755-1.8794 1.1502 1.1502 1.294.2773.996-.7189 1.1605.2876 2.7317.1438 1.4377-1.4378 2.29-2.5981.4314-.2876 2.5879-4.765 2.7316-1.1501.4313-1.4377-1.294-2.742 3.1528.8627 2.8754-1.2837 1.1502-.1438 3.8613-.9961 5.566-2.1874-1.027-.4313-2.7316-3.4608-1.0064-.2773-2.4441-6.4697-20.8469-4.2104-13.001 1.2734-.1027 1.3555.3594v-2.29l1.1502-4.0051 2.3106-4.1591 1.294-3.5943-1.7458-2.1566v-5.2887l.7394-.873.7188-2.444-.1438-1.294-.1335-4.3131 1.5815-4.2926 2.5982-7.9075 1.8793-3.738h1.1502l1.1501.1437v1.0065l1.1502 2.0127 2.4647.5751.7188-.7188v-.8627l3.5943-2.5878 1.5815-1.5815 1.294.1437 5.34 2.1566 1.715.8626 8.0615 26.5978h5.34l.7189 1.715.1335 4.3131 2.5879 2.0128h.7188l.154-.4313-.4415-.9961 2.4647-.1438Zm-18.639 26.7826 1.3659-1.3658 1.2323.9242.493 2.1566-1.5097.801-1.5917-2.516Zm5.9768-5.2374 1.5815 1.643s1.1604.072 1.1604-.2053c0-.308.2054-1.8074.2054-1.8074l.8216-.7189-.7394-1.5712-1.7869.6367-1.2323 2.0026Z"
                                        className="state me" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(7)}
                                        style={{ fill: selected.includes(7) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="ME_label" x="843.9862" y="136.4945" fontSize="11.1176" strokeWidth=".9263">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="ME_tspan" x="843.9862"
                                            y="136.4945" fontStyle="normal" fontWeight={400} fontSize="13.8965" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".9263">ME</tspan>
                                    </text>
                                </g>
                                <g id="g5133">
                                    <path id="RI" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m828.3152 216.3482-3.2863-13.2886 5.5763-1.643 1.9512 1.715 2.9473 3.8407 2.3928 3.9023-2.67 1.4378-1.1502-.1335-1.0064 1.5814-2.1566 1.7253-2.5879.8626Z"
                                        className="state ri" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(8)}
                                        style={{ fill: selected.includes(8) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} />
                                    <path d="m831.5295 209.252 15.363 16.996-15.3836-17.0062Z" id="RI_line" stroke="#000"
                                        strokeOpacity={1} style={{ strokeWidth: '1.02694' }} /><text id="RI_label" x="854.537"
                                            y="235.1361" fontSize="9.5906" strokeWidth=".799">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="RI_tspan" x="854.537"
                                            y="235.1361" fontStyle="normal" fontWeight={400} fontSize="11.9885" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".799">RI</tspan>
                                    </text>
                                </g>
                                <g id="g5101">
                                    <path id="NY" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m789.3942 225.108-1.027-.8626-2.3003-.154-2.0128-1.7253-1.4377-5.4428-3.0809.0719-2.1873-2.403-17.2731 3.9023-38.3049 7.7534-6.7162 1.0886-.647-5.7509 1.2632-.9858 1.1605-1.0065.8626-1.4377 1.5815-1.0064 1.7458-1.5815.4107-1.4377 1.8896-2.444 1.0064-.8627-.1438-.8626-1.1501-2.7317-1.5918-.1438-1.715-5.4427 2.5982-1.5918 3.8818-1.294 3.5943-1.1501 2.8754-.4313 5.6277-.1438 1.7458 1.1296 1.4377.154 1.8485-1.1501 2.3208-1.0064 4.6213-.4313 1.8484-1.5815 1.5918-2.8754 1.4377-1.7458h1.8793l1.7253-.9962.1438-2.0128-1.294-1.869-.2875-1.294 1.0064-1.869v-1.2939h-1.5815l-1.5918-.7188-.7188-1.0065-.1438-2.3003 5.1758-4.8882.575-.7189 1.3043-2.5879 2.5879-4.0256 2.4338-3.2862 1.8793-2.1565 2.1566-1.6431 2.7419-1.0989 4.8985-1.1501 2.8754.154 4.0359-1.294 6.7367-1.8484.4621 4.4158 2.1566 5.7509.7189 4.6006-.8524 3.4506 2.3003 4.0256.7189 1.869-.7189 2.5879 2.5674 1.1502.5956.2875 2.7317 9.756-.4724 4.5184-.4416 9.6225.7188 4.878.719 3.1629 1.3041 6.4697v7.1886l-1.0064 2.0025 1.6431 1.7766.6983 1.489-1.7252 1.5816.2875 1.1501 1.1502-.308 1.3042-1.1297 2.023-2.3106 1.0065-.575 1.4377.5647 2.023.1438 7.0551-3.4608 2.5674-2.4338 1.1707-1.294 3.738 1.4377-3.0191 3.1527-3.4608 2.588-6.3363 4.7238-2.3003.873-5.186 1.7252-3.5943 1.0064-1.0475-.4621-.2054-3.2862.4108-2.4339-.1335-1.869-2.5057-1.5096-4.0256-.8729-3.4506-1.0064-3.317-1.5815Z"
                                        className="state ny" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(9)}
                                        style={{ fill: selected.includes(9) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NY_label" x="776.8203" y="197.8284" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="NY_tspan" x="776.8203" y="197.8284" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">NY</tspan>
                                    </text>
                                </g>
                                <g id="g5061">
                                    <path id="PA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m784.701 257.0663 1.1708-.2464 2.0744-1.1091 1.068-2.208 1.4377-2.0025 2.8754-2.7316v-.7189l-2.1565-1.4377-3.163-2.1566-.8729-2.3003-2.4339-.2876-.1437-1.0063-.7189-2.4442 2.0026-1.0064.1437-2.1565-1.1604-1.1502.1437-1.4377 1.7459-2.7214v-2.7317l2.3927-2.362-.8215-.5956-2.2388-.1745-2.0538-1.7253-1.3761-5.4428-3.1117.1027-2.1873-2.4133-16.123 3.7278-38.3048 7.7637-7.928 1.2837-.5545-5.8023-4.7753 4.5186-1.1502.4108-3.738 2.67 2.5981 17.0266 2.1977 8.6469 3.1835 17.119 2.9165-.5648 10.6391-1.335 33.7863-6.8086 13.2475-2.5263 7.394-1.4377.2464-.2054 1.8793-1.4377 1.8793-.6162Z"
                                        className="state pa" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(10)}
                                        style={{ fill: selected.includes(10) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="PA_label" x="743.0566" y="249.7124" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="PA_tspan" x="743.0566" y="249.7124" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">PA</tspan>
                                    </text>
                                </g>
                                <g id="g5096">
                                    <path id="VA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m790.5032 293.841-.1232-1.7458 5.7509-2.2592-.688 2.8754-2.6085 3.3478-.38 4.077.4108 3.0089-1.643 4.4158-1.9205 1.7047-1.3144-4.1282.4107-4.8472 1.407-3.7175.6777-2.7522Zm2.9782 25.16-51.8296 11.1731-33.3345 4.6931-5.9562-.308-2.3003 1.6944-6.5417.2054-7.4658.8626-9.7251 1.4377 9.3143-5.0011v-1.8485l1.335-1.8999 9.417-10.2283 3.5122 3.9845 3.3684.8524 2.2592-1.0064 2.0026-1.1707 2.2592 1.2015 3.4916-1.2631 1.6637-4.0565 2.3106.4725 2.5468-1.8896 1.602.4313 2.5365-3.2657.3081-1.8485-.8626-1.1296.8934-1.6636 4.7034-10.9164.5443-5.0833 1.109-.4724 1.9513 2.1565 3.4916-.2567 1.7252-6.7367 2.4852-.5135.9243-2.4338 2.3106-2.0847 2.4646-5.0628.0822-4.498 8.7598 3.3889c.6161.308.7394-4.498.7394-4.498l3.2554 1.4377.0616 2.5982 5.1552 1.1604 1.8999 1.027 1.4787 1.8484-.5956 3.2349-1.7458 2.3003.1027 1.8485.534 1.6431 4.4364 1.1296 3.964.0206 2.7316.842 1.7458.2774.6162 2.7316 2.8549.3594.7702 1.0783-.38 4.1694 1.2323.9961-.4313 1.715 1.0989.6983-.2054 1.2324-2.3928-.0822.0822 1.4377 2.0333 1.3659.1027 1.2528 1.5815 1.5815.4416 2.2387-2.2798 1.2323 1.4069 1.335 5.1655-1.5095 3.2143 5.34Z"
                                        className="state va" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(11)}
                                        style={{ fill: selected.includes(11) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="VA_label" x="750.8778" y="314.5575" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="VA_tspan" x="750.8778" y="314.5575" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">VA</tspan>
                                    </text>
                                </g>
                                <g id="g5091">
                                    <path id="WV" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m727.7368 269.749.9858 4.3953.9653 5.3607 1.8999-2.2901 2.023-2.7317 2.2593-.534 1.3042-1.294 1.5815-2.3003 1.294.5751 2.5878-.2875 2.3004-1.869 1.7971-1.294 1.6431-.4313 1.1605.9037 3.245 1.6226 1.7254 1.5815 1.2323 1.1501-.688 4.9293-5.1964-2.2592-3.7997-1.4377-.0821 4.6006-2.4441 4.9293-2.2593 2.1566-1.0577 2.4441-2.362.4416-.7908 3.204-.9242 3.4916-3.5327.3081-2.0847-2.1565-.955.4826-.5648 4.8677-1.2118 3.1527-4.4158 9.7354.801 1.027-.1849 1.7047-2.5057 3.4607-1.6123-.4826-2.629 1.9204-2.2592-.5135-1.787 4.0564s-2.9061 1.2631-3.4915 1.2118c-.154 0-2.208-1.1091-2.208-1.1091l-2.0846 1.2323-2.1566.9243-3.3273-.7908-.996-1.027-1.9513-2.7008-2.7932-1.7663-1.52-3.2246-3.8201-3.0808-.5751-2.0128-2.3004-1.294-.7188-1.4377-.226-4.6725 1.9512-.0822 1.7253-.7188.1438-2.4442 1.4377-1.2836.1438-4.4672.8626-3.4505 1.1604-.5854 1.1297 1.0064.4416 1.5918 1.5814-.8627.4314-1.4377-1.027-1.5712v-2.1566l.8729-1.1501 2.023-3.0192 1.1503-1.2837 1.869.4313 2.023-1.4377 2.7317-3.009 2.0025-3.4505.2876-5.032.4416-4.4569v-4.1694l-1.027-2.7316.873-1.2837 1.1604-1.1501 3.1116 17.6222 4.1283-.6572 11.0704-1.602Z"
                                        className="state wv" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(12)}
                                        style={{ fill: selected.includes(12) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="WV_label" x="712.1632" y="302.377" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="WV_tspan" x="712.1632" y="302.377" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">WV</tspan>
                                    </text>
                                </g>
                                <g id="g5056">
                                    <path id="OH" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m704.7025 229.185-5.4428 3.5942-3.4505 2.0128-3.0294 3.3068-3.5943 3.4505-2.8755.7189-2.5981.4313-4.9088 2.3003-1.869.1438-3.0295-2.7317-4.6212.5751-2.29-1.294-2.1258-1.2014-4.3543.6367-9.0678 1.4377-9.9819 1.9512 1.1502 12.9907 1.5815 12.2206 2.3209 20.8469.5134 4.2823 3.656-.1027 2.1565-.7188 3.009 1.335 1.8484 3.8715h4.5699l1.6842 1.8793 1.5712-.0616 2.2593-1.1912 2.2387.3389 4.8266.4313 1.5404-1.8999 2.0847-1.1501 1.8485-.6162.575 2.4647 1.5815.8523 3.1014 2.095 1.9512-.072 1.181-.4415.1643-2.4647 1.4172-1.2734.1027-4.2618.9037-3.6559 1.1604-.5442 1.1604 1.0269.4827 1.4993 1.5404-.9242.38-1.294-.9962-1.6944.0617-2.0539.6675-.955 1.9306-2.9474.9243-1.376 1.8793.4107 2.0333-1.4377 2.7317-3.009 2.4646-3.625.2875-4.4877.4314-4.457-.154-4.7239-.8627-2.5673.308-1.0578 1.6124-1.5404-2.0334-8.0615-2.5981-17.2114Z"
                                        className="state oh" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(13)}
                                        style={{ fill: selected.includes(13) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="OH_label" x="673.4609" y="274.0057" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="OH_tspan" x="673.4609" y="274.0057" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">OH</tspan>
                                    </text>
                                </g>
                                <g id="g5051">
                                    <path id="IN" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m601.567 323.9714.0514-2.5365.4313-4.0256 2.0128-2.5674 1.5918-3.4505 2.3003-3.738-.4827-4.7753-1.5301-2.8446-.2875-2.8755.7188-4.8882-.4313-6.1616-1.1604-14.2437-1.1502-13.6583-.8524-10.4028 2.742.7907 1.2939.842 1.0064-.2875 1.869-1.715 2.5263-1.4377 4.539-.1437 19.5838-2.0128 4.9704-.4724 1.335 14.1923 3.7791 32.7593.534 5.1142-.3286 2.0128 1.0886 1.602.1027 1.2118-2.2593 1.4377-3.1527 1.3658-2.8549.493-.5443 4.3337-4.077 2.9473-2.4851 3.5532.2875 2.1155-.5134 1.3555h-2.9782l-1.4069-1.4377-2.2284 1.1296-2.3928 1.335.1438 2.7112-1.068.2362-.4108-.9037-1.9307-1.335-2.896 1.1912-1.3863 2.67-1.2734-.7188-1.294-1.4172-3.9742.4313-4.9807.8627-2.5981 1.376Z"
                                        className="state in" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(14)}
                                        style={{ fill: selected.includes(14) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="IN_label" x="624.9823" y="288.4629" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="IN_tspan" x="624.9823" y="288.4629" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">IN</tspan>
                                    </text>
                                </g>
                                <g id="g5036">
                                    <path id="IL" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m601.5362 324.3103.0308-2.8754.5135-4.1283 2.0539-2.5879 1.6739-3.6148 1.9923-3.5532-.3287-4.6726-1.5301-2.8446-.2875-2.8755.7188-4.8882-.4313-6.1616-1.1604-14.2437-1.1502-13.6583-.8524-10.4028-.4518-.6573-.7189-2.29-1.1604-3.3068-1.4377-1.5815-1.294-2.3106-.2054-4.878-40.8105 2.3107.2054 2.1052 2.0333.6162.8216 1.0063.4107 1.6431 3.4608 3.0398.6162 2.023-.6162 3.0603-1.4493 2.6353-.655 2.5876-1.9842 1.4675-1.4106.4999-5.0989 1.775-.6162 1.6122-.6161 1.828.6161 1.2323 1.6431 1.4172-.2053 3.6559-1.6431 1.4069-.6162 1.4377v2.4236l-1.6123.4107-1.4377 1.027-.2054 1.2118.2054 1.8485-1.5199 1.1604-.9242 2.4852.4107 3.2554 2.054 6.5005 6.5107 6.706 4.8882 3.2553-.2053 3.8613.8215 1.2323 5.6893.4108 2.444 1.2118-.6161 3.2451-2.023 5.2887-.6162 2.8344 2.0333 3.4505 5.72 4.6829 4.077.6161 1.828 4.457 1.8484 2.8446-.8215 2.6392 1.4172 3.6559 1.643 1.828 1.2324-.7703.8216-1.8484 1.9717-1.5405 1.8998-.5545 2.3209 1.0577 3.2349 1.2324 1.0577-.2773.1848-2.0025-1.1501-2.136.2772-2.1156 1.6431-1.2015 2.6906-.7188 1.1297-.4108-.5546-1.2323-.6983-2.095 1.2734-.8729 1.027-2.8446Z"
                                        className="state il" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(15)}
                                        style={{ fill: selected.includes(15) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="IL_label" x="583.0801" y="288.7772" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="IL_tspan" x="583.0801" y="288.7772" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">IL</tspan>
                                    </text>
                                </g>
                                <g id="g5138">
                                    <path id="CT" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m828.3152 216.3174-3.2863-13.227-4.2104.8216-18.8957 4.2104.8832 2.8755 1.294 6.4697.1642 7.9588-1.0885 1.9306 1.7047 1.715 3.7997-3.471 3.1835-2.8755 1.7252-1.869.7189.575 2.4441-1.2939 4.6212-.9961 6.9319-2.8344Z"
                                        className="state ct" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(16)}
                                        style={{ fill: selected.includes(16) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="CT_label" x="812.9542" y="216.3266" fontSize="8.158" strokeWidth=".6798">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="CT_tspan" x="812.9542"
                                            y="216.3266" fontStyle="normal" fontWeight={400} fontSize="10.1975" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".6798">CT</tspan>
                                    </text>
                                </g>
                                <g id="g5041">
                                    <path id="WI" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m597.562 232.7792-.072-2.8138-1.0577-4.0256-.575-5.4633-1.0064-2.1566.8626-2.7213.7188-2.588 1.3042-2.3003-.575-3.0089-.5751-3.163.4416-1.5917 1.7252-2.1566.1438-2.4441-.7189-1.1502.5648-2.29-.4107-3.697 2.4646-5.032 2.5674-6.059.1643-2.0025-.2876-.8626-.7188.4313-3.738 5.607-2.4647 3.5943-1.715 1.5918-.7189 2.0128-1.7458.7189-.996 1.7252-1.294-.2875-.1438-1.5712 1.1502-2.1566 1.869-4.1694 1.5918-1.4377.8831-2.0847-2.29-1.6944-1.7459-9.2117-3.1835-1.1912-1.7252-2.054-10.8034-2.4338-2.5674-.8934-7.3118-1.9306-7.055-1.027-3.3581-4.5596-.6778.493-1.068-.1438-.5751-1.0064-1.1913.2567-1.0064.1438-1.5815.8523-.8626-.575.5751-1.7253 1.7253-2.7317 1.0064-1.0064-1.7253-1.2939-1.869.7189-2.5982 1.7252-6.6135 2.8754-2.5879.5649-2.5981-.4313-.8626-.7703-1.8896 2.5263-.2054 2.4441v7.5172l-1.027 1.4377-4.6725 3.4403-2.0333 5.2887.4107.2054 2.2285 1.828.6162 2.8446-1.6431 2.8446v3.4505l.4107 5.8946 2.6495 2.6495h3.0603l1.6226 2.8447 3.0808.4107 3.4505 5.0731 6.3157 3.6662 1.8485 2.4441.8215 6.6032.5956 2.9473 2.054 1.4172.1848 1.2323-1.828 3.0398.2054 2.8343 2.2387 3.4505 2.2388 1.027 2.6495.4108 1.1912 1.2117 40.3587-2.362Z"
                                        className="state wi" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(17)}
                                        style={{ fill: selected.includes(17) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="WI_label" x="567.8249" y="199.9377" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="WI_tspan" x="567.8249" y="199.9377" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">WI</tspan>
                                    </text>
                                </g>
                                <g id="g5086">
                                    <path id="NC" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m793.4814 318.9394 1.8485 4.385 3.1835 5.751 2.1565 2.1565.5751 2.0025-2.1565.1438.7188.575-.2875 3.7381-2.3004 1.1502-.5853 1.869-1.1502 2.588-3.3067 1.4376-2.1566-.2875-1.294-.1438-1.4377-1.1502.2876 1.1502v.8626h1.715l.7188 1.1297-1.7252 5.6173h3.7483l.575 1.4377 2.0129-2.0025 1.1296-.4313-1.715 3.163-2.7419 4.3131h-1.1502l-1.0064-.4108-2.444.5648-4.6213 2.1566-5.7509 4.7445-3.0294 4.159-1.7253 5.751-.4313 2.1565-4.1797.4313-4.8574 1.1913-8.8625-7.2913-11.2347-6.7572-2.5879-.7189-11.2347 1.294-3.7996.6674-1.4583-2.8754-2.6392-1.8793-14.6852.4313-6.4698.7189-8.082 4.0256-5.4736 2.29-18.8648 2.3004.4518-3.5943 1.5815-1.2836 2.4647-.5751.5648-3.317 3.7483-2.4442 3.4608-1.3042 3.738-3.163 3.9024-1.869.5751-2.7316 3.4608-3.4505.575-.1336s0 1.0064.719 1.0064c.7188 0 1.715.2876 1.715.2876l2.023-3.163 1.869-.5648 2.0128.2773 1.4377-3.1527 2.5982-2.3004.4313-1.869.1643-3.2451 3.7997-.0206 6.4286-.7599 14.028-2.0025 13.4837-1.8485 19.2757-4.2105 17.807-3.7894 9.9614-2.1565Zm3.7997 29.5245 2.3106-2.2285 2.8138-2.3003 1.3658-.5648.1438-1.8074-.5751-5.4633-1.294-2.0847-.575-1.6637.647-.2054 2.4338 4.878.3594 3.9537-.1438 3.009-3.0192 1.376-2.5262 2.1566-1.0064 1.0783-.9243-.154Z"
                                        className="state nc" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(18)}
                                        style={{ fill: selected.includes(18) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NC_label" x="748.4911" y="351.5755" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="NC_tspan" x="748.4911" y="351.5755" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">NC</tspan>
                                    </text>
                                </g>
                                <g id="g5127">
                                    <path id="MA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m851.0824 211.3368 1.9306-.6162.4108-1.5199.9242.1027.9038 2.0334-1.1297.4107-3.4505.1027Zm-8.3593.7188 2.0539-2.3414h1.4171l1.6431 1.3145-2.1565.9242-1.9204.9037-1.027-.8215Zm-31.0136-19.5529 15.7327-4.1283 2.0231-.575 1.7047-2.4853 3.3273-1.4788 2.5674 3.923-2.1566 4.6006-.2876 1.294 1.7253 2.3003 1.027-.7188h1.5712l2.0128 2.3003 3.471 5.3093 3.163.4313 2.023-.8626 1.5815-1.5713-.7188-2.444-1.869-1.4378-1.3042.7189-.8627-1.1502.4313-.4313 1.8793-.1438 1.5712.7189 1.7253 2.1565.8729 2.588.2875 2.1565-3.738 1.2837-3.471 1.7458-3.4506 4.005-1.7458 1.3042v-.8626l2.1771-1.294.4314-1.5814-.719-2.7317-2.598 1.294-.719 1.294.4314 2.0024-1.8485.8935-2.4646-4.0256-3.009-3.8818-1.8485-1.6123-5.8227 1.6739-4.5186.9242-18.4335 4.0872-.5956-4.2412.575-9.4068 3.8203-.7907 6.059-1.1502Z"
                                        className="state ma" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(19)}
                                        style={{ fill: selected.includes(19) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="MA_label" x="822.1987" y="199.9901" fontSize="7.9803" strokeWidth=".6655">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="MA_tspan" x="822.1987"
                                            y="199.9901" fontStyle="normal" fontWeight={400} fontSize="9.9747" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".6655">MA</tspan>
                                    </text>
                                </g>
                                <g id="g5006">
                                    <path id="MO" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m547.0982 277.8824-2.2593-2.7522-1.0064-2.023-57.3442 2.1257-2.0334.1027 1.1297 2.2387-.2054 2.0334 2.2284 3.4505 2.7522 3.6559 2.7728 2.444 1.91.2055 1.335.8215v2.629l-1.6225 1.4377-.4108 2.023 1.828 3.0398 2.2593 2.6393 2.2284 1.6225 1.2323 10.3721.267 32.061.2054 4.1591.4108 4.7856 19.974-.7702 20.6723-.6162 18.5362-.6983 10.372-.2054 1.9513 3.0397-.6162 2.9473-2.7522 2.136-.5135 1.6432 4.7958.4108 3.4711-.6162 1.5404-4.8882.575-5.2169 1.8691-2.2593 2.3106-1.335.0514-2.711.9037-1.715-1.5096-2.2593-1.2015.8831-1.7766-1.982-1.1297-4.231.6984-2.2284-1.7253-3.05-1.6431-4.0667-4.272-.7189-6.2028-4.9703-1.5404-3.656.7189-2.8446 1.8484-5.3811.4108-2.5674-1.7458-.9037-6.1102-.7188-.9243-1.5096-.1027-3.7689-4.878-3.05-6.213-6.8805-2.0538-6.521-.2054-3.7484.7189-2.0333Z"
                                        className="state mo" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(20)}
                                        style={{ fill: selected.includes(20) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="MO_label" x="530.9578" y="322.202" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="MO_tspan" x="530.9578" y="322.202" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">MO</tspan>
                                    </text>
                                </g>
                                <g id="g5071">
                                    <path id="GA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m648.508 373.3528.021 1.9656.1437 1.869.5854 3.0192 3.0192 7.0448 2.1566 8.7598 1.3042 5.4633 1.4377 4.3131 1.294 6.1822 1.8895 5.5866 2.3003 3.0192.4314 3.0192 1.7252.7188.1438 1.869-1.5815 4.3132-.4313 2.8754-.1438 1.7253 1.4377 3.8715.2876 4.724-.7189 2.1565.575.7189 1.3043.7188-.154 2.4852 2.3106 3.4505 1.294 1.2734 7.2296.4416 19.0497-.9488 10.1297-.5525 4.4528-.8196 4.5596.1849.38 2.5673 2.0025.719.2054-4.1078-1.3555-3.697 1.1707-1.407 4.9395.534 4.6829.4622-.688-5.607 2.0127-8.8934 1.3145-3.738-.4313-2.3004 2.9781-5.5455-.4621-1.2015-1.6945.6162-2.3106-1.1502-.575-1.869-1.1502-3.163-2.0128-1.869-2.3106-.575-1.4378-4.3132-2.5981-5.6277-3.7483-1.7252-1.869-1.7253-1.1502-2.3003-1.869-1.7253-2.0231-1.1501-2.0231-2.588-2.742-2.0127-4.0255-1.5815-.4313-1.2837-2.1566-2.5879-.4416-1.294-3.0295-4.4158-3.1424.0822-3.358-2.095-1.2632-1.1296-.2876-1.5918.7805-1.7252 1.982-.9859-.5545-1.8485-37.3646 4.199Z"
                                        className="state ga" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(21)}
                                        style={{ fill: selected.includes(21) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="GA_label" x="690.996" y="421.0418" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="GA_tspan" x="690.996" y="421.0418" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">GA</tspan>
                                    </text>
                                </g>
                                <g id="g5081">
                                    <path id="SC" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m731.0948 420.1545-1.5917.8626-2.3106-1.1501-.5751-1.869-1.1502-3.163-2.0128-1.869-2.3209-.5751-1.4377-4.3132-2.4646-5.3195-3.7278-1.715-1.869-1.7253-1.1502-2.3003-1.869-1.7253-2.0128-1.1501-2.0231-2.588-2.7214-2.0025-4.0359-1.5814-.4313-1.2837-2.1566-2.588-.4416-1.2938-3.0191-4.5905-3.0295.1438-3.5943-2.1566-1.1502-1.1501-.2875-1.5815.7188-1.7253 2.0128-.8626-.4518-2.0333 5.1347-2.0745 8.1128-4.0872 6.9421-.7188 14.3566-.3697 2.3414 1.6636 1.4994 2.9781 3.8304-.534 11.245-1.294 2.5982.719 11.2347 6.7572 9.0062 7.2194-4.8266 4.8471-2.3208 5.4428-.4314 5.6173-1.4377.719-1.0064 2.444-2.1566.5751-1.8792 3.1835-2.4442 2.4236-2.0128 3.0192-1.4377.7189-3.1835 3.0192-2.5673.1437.8523 2.8755-4.4774 4.8882-1.869 1.1501Z"
                                        className="state sc" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(22)}
                                        style={{ fill: selected.includes(22) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="SC_label" x="725.9622" y="389.6164" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="SC_tspan" x="725.9622" y="389.6164" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">SC</tspan>
                                    </text>
                                </g>
                                <g id="g5031">
                                    <path id="KY" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m696.3843 319.8123-2.0539 2.1155-3.1835 3.5635-4.385 4.8574-1.0783 1.5404-.0513 1.8485-3.9024 1.9307-5.032 3.0192-6.4492 1.602-46.2122 4.3542-14.0486 1.5815-4.1283.4518-3.4402-.0205-.2054 3.7483-7.2913.1233-6.1924.575-7.1167-.041 1.0783-1.1707 2.2285-1.3761.2053-2.8447.801-1.6123-1.4377-2.2592.7189-1.6945 2.023-1.5815 1.8691-.575 2.4647 1.1501 3.1526 1.1502 1.0064-.2875.1438-2.0128-1.1501-2.1566.2875-2.0025 1.7252-1.294 2.3107-.575 1.4377-.5649-.7189-1.5815-.575-1.715 1.335-.8831c0-.0411 1.109-3.1322 1.0988-3.2554l2.7214-1.3145 4.7444-.8626 4.005-.4314 1.2324 1.4378 1.3659.7804 1.4171-2.7727 2.8344-1.1296 1.982 1.335.3594.8729 1.0475-.2362-.1438-2.6187 2.7933-1.5712 1.91-.955 1.366 1.4787 2.9575-.041.5135-1.3967-.3081-2.0128 2.3003-3.5532 4.2516-3.05.6161-4.3132 2.6187-.4107 3.3684-1.4583 2.177-1.5199-.1848-1.3863-1.027-1.294.5136-2.67 3.738-.1027 2.0539-.6675 2.9781 1.2734 1.828 3.8715h4.5698l1.8177 1.9718 1.4377-.1438 2.321-1.1296 4.6622.5134 2.3004.1849 1.5096-1.828 2.3311-1.2734 1.674-.6161.575 2.5057 1.828.9448 2.362 1.8485.1026 5.032.7189 1.4171 2.3106 1.3761.688 2.054 3.697 3.0397 1.6226 3.2245 2.1874 1.4789Z"
                                        className="state ky" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(23)}
                                        style={{ fill: selected.includes(23) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="KY_label" x="652.5278" y="328.4992" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="KY_tspan" x="652.5278" y="328.4992" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">KY</tspan>
                                    </text>
                                </g>
                                <g id="g5066">
                                    <path id="AL" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m612.0213 466.6132-1.335-12.734-2.4442-16.6775.1438-12.5081.7189-27.5939-.1438-14.7879.1438-5.6995 39.4583-3.2459.048 1.9725.154 1.869.5751 3.0192 3.0398 7.0448 2.1565 8.7598 1.294 5.4633 1.4377 4.3132 1.3042 6.1616 1.8485 5.6174 2.3106 3.0192.4313 3.0192 1.7458.7188.1335 1.869-1.5815 4.3132-.4415 2.8754-.1438 1.715 1.4377 3.9024.2876 4.7239-.719 2.1566.5752.7188 1.294.7189.2875 2.5673-4.9807-.308-6.059.575-22.7466 2.588-9.2836 1.2528-.2053 2.5673 1.5917 1.5713 2.3004 1.7252.5134 7.0653-4.9293 2.2799-2.4646-.2876 2.4646-1.7252v-.8524l-2.742-5.3093-2.0127-.575-1.294 3.8818-1.1501 2.444-.5751-.1437h-2.4441Z"
                                        className="state al" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(24)}
                                        style={{ fill: selected.includes(24) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="AL_label" x="637.1402" y="421.3047" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="AL_tspan" fill="#000000" fontFamily="Arial" fontSize="15.4041" fontStyle="normal"
                                            fontWeight={400} textAnchor="middle">AL</tspan>
                                    </text>
                                </g>
                                <g id="g5016">
                                    <path id="LA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m591.2258 465.4836-2.9268-2.8138.8934-4.8882-.5853-.801-8.2566.9037-22.2846.4107-.6162-2.136.8216-7.5172 2.937-5.2887 4.4878-7.7226-.5135-2.1258 1.1296-.6161.4108-1.7253-2.0539-1.828-.1027-1.7252-1.6225-3.8716-.1438-5.6276-49.4266.8216.0308 8.503.6162 8.3388.6162 3.4505 2.2284 3.6559.8216 4.4672 3.8613 4.878.2053 2.8445.6162.6162-.6162 7.4967-2.67 4.4877 1.4377 1.828-.6161 2.2387-.6162 6.5005-1.2118 2.8446.1027 3.2143 4.1796-1.3555 10.7829.2054 9.222 3.1526 5.7508 1.0065 3.3272-1.294 2.8755.9961 2.8754.8627.7189-1.8485-2.8755-1.027-2.3003.4416-2.4647-1.4377s.154-1.1502.7394-1.294c.5751-.1437 2.7317-.8626 2.7317-.8626l1.5815 1.294 1.5917-.873 2.8755.5752 1.2939 2.1565.308 2.0231 4.0257.2876 1.5815 1.5814-.7189 1.4377-1.1502.719 1.4378 1.4376 7.4966 3.1527 3.163-1.1501.8626-2.1566 2.3106-.5751 1.5918-1.3042 1.1501.8626.719 2.5879-2.0129.7189.5854.5648 3.0294-1.1502 2.0128-3.0192.7189-.4416-1.869-.2875.7188-1.4377-.1438-1.3042 1.869-.4314 1.0065-1.1296.575.7189s-.1437 2.7213.5854 2.7213c.7189 0 3.738.5751 3.738.5751l3.5944 1.7458.8626 1.2837h2.5982l1.0063.8626 2.0128-2.7419v-1.294h-1.1296l-3.0397-2.444-5.186-.719-2.8755-2.023.9961-2.4441 2.0128.2876.1438-.5751-1.5815-.8627v-.4313h2.8755l1.5917-2.7214-1.1502-1.715-.2875-2.444-1.3042.1437-1.715 1.869-.5751 2.2901-2.7317-.5854-.8626-1.5712 1.5918-1.7252 1.7047-3.0808-.9448-2.1258-1.027-3.543Z"
                                        className="state la" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(25)}
                                        style={{ fill: selected.includes(25) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="LA_label" x="540.46" y="456.8727" style={{ fontSize: '12.3233px', strokeWidth: '1.02694' }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="LA_tspan" x="540.46" y="456.8727" fontStyle="normal" fontWeight={400} fontSize="15.4041"
                                            fontFamily="Arial" textAnchor="middle" fill="#000000">LA</tspan>
                                    </text>
                                </g>
                                <g id="g5021">
                                    <path id="MS" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m612.2472 465.648-.2362 1.1295h-4.6007l-1.3145-.7188-1.869-.3081-6.059 1.7458-1.5712-.7189-2.3106 3.7176-.9755.6983-1.0065-2.2182-1.0269-3.4505-3.0603-2.8446 1.027-4.9293-.6162-.8216-1.6431.2054-7.0448.7805-21.8738.3286-.6778-1.9717.7805-7.4454 2.7727-5.032 4.6623-8.1436-.4107-2.1566 1.109-.5853.3903-1.7047-2.0539-1.8485-.1027-1.9101-1.643-3.656-.1028-5.3092 1.1913-2.1976-.2054-3.05-1.5712-2.742 1.335-1.3145-1.3864-2.2181.4108-1.4686 1.3966-5.8125 2.2285-1.8176-.575-2.1052 3.2861-4.724 2.5057-1.1912-.2053-1.489-.2465-1.4789 2.5673-4.9498 2.0847-1.0988.1335-.7908 33.2728-3.4505.1644 5.5865.1437 14.788-.7188 27.604-.1438 12.498 2.4647 16.6671 1.3042 11.9125Z"
                                        className="state ms" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(26)}
                                        style={{ fill: selected.includes(26) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="MS_label" x="589.4677" y="423.8875" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="MS_tspan" x="589.4677" y="423.8875" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">MS</tspan>
                                    </text>
                                </g>
                                <g id="g5001">
                                    <path id="IA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m556.6693 234.7304.2362 2.4852 1.9922.5135.8524 1.0885.4518 1.6431 3.389 2.9987.6161 2.1258-.6162 3.0397-1.4069 2.8754-.7188 2.4339-1.9307 1.4377-1.5198.493-4.9704 1.643-1.2323 3.43.6366 1.2323 1.6431 1.4891-.2567 3.5943-1.5712 1.3555-.688 1.4583.1026 2.4647-1.6636.4107-1.4377.9756-.267 1.2015.2567 1.8793-1.3863.9962-2.1977-2.7728-1.1296-2.1873-58.5664 2.2387-.8215.154-1.828-4.005-.2054-5.905-1.4171-3.6558-.6162-4.6829-2.0539-3.2451-.8215-4.272-2.4339-6.706-1.0269-4.765-1.2118-1.9306-1.4377-2.4339 1.7458-4.3131 1.2323-5.0628-2.444-1.8485-.4109-2.4236.8216-2.2284h1.5199l73.6315-1.1297.76 3.7278 1.9922 1.3864.2259 1.2734-1.8074 3.0089.1746 2.8549 2.2387 3.3683 2.2593 1.1502 2.7316.4519.5956.7188Z"
                                        className="state ia" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(27)}
                                        style={{ fill: selected.includes(27) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="IA_label" x="516.1185" y="250.3676" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="IA_tspan" x="516.1185" y="250.3676" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">IA</tspan>
                                    </text>
                                </g>
                                <g id="g4996">
                                    <path id="MN" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m472.9635 171.8407-.4108-7.5172-1.6226-6.5005-1.643-11.9844-.4108-8.729-1.6226-3.0603-1.4377-4.4671v-9.1398l.6162-3.4608-1.6226-4.8471 26.8544.041.2773-7.3323.575-.1438 2.0129.4313 1.715.7189.7188 4.8882 1.3042 5.4633 1.4378 1.4378h4.3131l.308 1.2939 5.6072.2875v1.869h4.3131l.3081-1.1501.9961-1.0064 2.0128-.575 1.1502.8625h2.5982l3.4608 2.3004 4.7444 2.1566 2.1566.4107.4416-.842 1.2939-.4314.4313 2.5674 2.3106 1.1604.4313-.4313 1.1502.154v1.869l2.3004.8627h2.7932l1.4378-.7189 2.8754-2.8754 2.3106-.4108.7188 1.5713.4314 1.1501h.8626l.8524-.7188 7.928-.2876 1.5814 2.7317h.5648l.6367-.9653 3.9537-.339-.5442 2.0334-3.5122 1.6431-8.2463 3.5943-4.2515 1.7869-2.7214 2.29-2.1566 3.163-2.023 3.4505-1.5815.7189-4.036 4.4569-1.1295.1438-3.8716 2.4646-2.1874 2.8344-.2054 2.8446.0822 7.1475-1.2323 1.4993-4.5186 3.3273-1.9922 5.3195 2.5673 1.9923.5956 2.8754-1.643 2.8755.1437 3.3272.3286 5.9768 2.7009 2.67h2.9781l1.6842 2.7728 3.009.4621 3.4402 5.032 6.3156 3.6662 1.9101 2.5674.5957 5.7097-72.3479 1.027-.308-31.7324-.4108-2.629-3.656-3.05-1.0269-1.6226v-1.4377l1.828-1.4172 1.2323-1.2323.2054-2.8343Z"
                                        className="state mn" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(28)}
                                        style={{ fill: selected.includes(28) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="MN_label" x="499.4072" y="179.0087" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="MN_tspan" x="499.4072" y="179.0087" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">MN</tspan>
                                    </text>
                                </g>
                                <g id="g4986">
                                    <path id="OK" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m388.4156 342.5077-14.8598-1.1297-.7908 9.7354 18.2385 1.027 28.5489 1.1604-2.0744 21.7095-.4108 15.8457.2054 1.4377 3.8715 3.2348 1.8485 1.027.6162-.2054.6162-1.828 1.2117 1.6226h1.828v-1.2323l2.4441 1.2323-.4108 3.4505 3.6765.2054 2.2387 1.027 3.6662.5956 2.2387 1.643 2.0539-1.8484 3.0397.6161 2.2593 3.05h.8215v2.0231l2.0231.6162 2.0333-2.054 1.6431.6162h2.2285l.8216 2.2388 5.607 1.8485 1.2324-.6162 1.6225-3.6456h1.027l1.0064 1.828 3.6661.616 3.2862 1.2119 2.6393.8215 1.6225-.8215.6162-2.2387h3.8716l1.828.8215 2.444-1.8485h1.027l.6161 1.4377h3.656l1.4376-1.828 1.6123.4108 1.8485 2.2285 2.855 1.6226 2.8445.8215 1.7458.9859-.3594-33.0675-1.2323-9.7559-.1335-7.8869-1.2837-5.8124-.688-6.3876-.0616-3.3889-10.824.2876-41.3548-.4108-40.1328-1.828-21.6479-1.2323Z"
                                        className="state ok" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(29)}
                                        style={{ fill: selected.includes(29) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="OK_label" x="460.5981" y="377.9473" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="OK_tspan" x="460.5981" y="377.9473" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">OK</tspan>
                                    </text>
                                </g>
                                <g id="g4991">
                                    <path id="TX" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m371.5943 351.1853 20.2307.955 27.6863 1.027-2.0744 20.8468-.267 16.123.0616 1.8485 3.8716 3.4094 1.7663 1.2837 1.0475-.493.3286-1.6225 1.027 1.602 1.8792.0411v-1.2734l1.4788.8524 1.027.3594-.3081 3.5224 3.6354.1027 2.5981 1.0577 3.5224.4724 2.1258 1.8485 1.8895-1.8485 3.3273.534 1.982 2.8755.955.2772-.1334 1.7458 1.9717.6983 2.0539-1.828 1.91.5444 1.982.0308.8216 2.1565 5.6482 1.8896 1.4069-.6778 1.335-3.7175h.308l.801.0719 1.0886 1.828 3.5122.5956 2.9781.9961 3.05 1.0578 1.6431-.8627.6162-2.2387 3.9742.041 1.6123.8216 2.4955-1.869.9859.041.7496 1.4378h3.6148l1.3556-1.8074 1.6636.3594 1.7458 2.1258 3.122 1.8177 2.5467.7188 1.3556.7189 2.1771 1.7663 2.7111-1.181 2.3928 1.027.5135 5.4222-.0411 8.6263.6162 8.4722.6161 3.204 2.3928 3.9333.801 4.3953 3.7689 4.9293.1745 2.7932.6676.6984-.6573 7.4453-2.5673 4.4672 1.3658 1.91-.5648 2.095-.5956 6.5724-1.335 2.9781.2567 3.1117-5.0526 1.4069-8.7803 4.0256-.8729 1.7252-2.3003 1.715-1.869 1.3042-1.1503.7189-5.032 4.7444-2.4646 1.8485-4.7547 2.8755-5.0526 2.1565-5.6173 3.0295-1.5712 1.294-5.186 3.163-3.0193.575-3.4608 4.8882-3.5942.2876-.8627 1.7252 2.023 1.7253-1.3041 4.8882-1.1502 4.0256-1.0064 3.4403-.7188 4.0256.7188 2.1565 1.5815 6.1617.8729 5.4736 1.5815 2.444-.873 1.294-2.7418 1.7253-5.032-3.4403-4.9088-1.027-1.1502.4417-2.8754-.5751-3.7483-2.7317-4.6213-.9961-6.7572-3.0192-1.869-3.4608-1.1605-5.7508-2.8754-1.7253-.5751-2.0025.575-.5751.2876-3.0192-1.1502-.5751-.575-.8626 1.1501-3.8819-1.4377-2.0128-2.8754-1.1501-3.0295-3.8819-3.1835-5.8843-3.738-2.3004.1437-1.7458-4.7444-10.9163-.7189-3.738-1.5917-1.7253-.1438-1.2837-5.3401-4.7445-2.29-2.7316v-1.0064l-2.3107-1.869-6.059-1.0064-6.6134-.5751-2.7317-2.0128-4.0358 1.5814-3.1836 1.294-2.0025 2.8754-.8626 3.3068-3.9024 5.4633-2.1566 2.1565-2.3003-.8728-1.5815-.986-1.7252-.575-3.4608-2.0128v-.575l-1.5815-1.7253-4.6212-1.869-6.6238-6.9011-2.023-4.1694v-7.1885l-2.8755-5.7509-.4313-2.4339-1.4377-.8523-1.027-1.869-4.4466-1.869-1.1604-1.4378-6.3363-7.0345-1.1501-2.8754-4.1694-2.0128-1.294-3.8819-2.3003-2.5879-1.7458-.4313-.5648-4.159 7.1167.616 25.8788 2.434 25.8584 1.4377 2.0025-17.3142 3.4608-49.3958 1.4377-16.657 1.2118.0309m88.2346 204.1554-.5135-6.326-2.4338-6.3875-.5135-6.2643 1.376-7.3118 2.9371-6.1103 3.1014-4.806 2.8035-3.163.5854.2053-4.2413 5.905-3.9023 5.8124-1.787 5.8946-.2874 4.5905.7907 5.4633 2.29 6.3875.4314 4.6007.1438 1.294-.801.2053Z"
                                        className="state tx" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(30)}
                                        style={{ fill: selected.includes(30) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="TX_label" x="425.8752" y="455.1628" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="TX_tspan" x="425.8752" y="455.1628" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">TX</tspan>
                                    </text>
                                </g>
                                <g id="g4951">
                                    <path id="NM" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m306.281 434.2441-.6983-4.2104 7.702.4518 26.8853 2.6187 24.2974 1.4993 1.9717-16.6364 3.4402-49.6627 1.5405-17.232 1.3966.1026.7189-9.9202-92.6505-9.4478-15.589 107.048 13.761 1.7664 1.1605-8.9035 26.0432 2.516Z"
                                        className="state nm" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(31)}
                                        style={{ fill: selected.includes(31) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NM_label" x="316.4559" y="392.5555" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="NM_tspan" x="316.4559" y="392.5555" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">NM</tspan>
                                    </text>
                                </g>
                                <g id="g4981">
                                    <path id="KS" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m502.0567 345.6706-11.2553.1849-41.057-.4108-39.7015-1.8177-21.9457-1.1296 3.4711-57.4059 19.6864.6162 35.8915.7188 39.4756.8935h4.539l1.9512 1.9203 1.7972-.0205 1.4582.9037-.0616 2.67-1.6431 1.5405-.2875 1.982 1.643 3.0192 2.629 2.8446 2.0744 1.4377 1.1605 9.9921.1643 32.0713Z"
                                        className="state ks" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(32)}
                                        style={{ fill: selected.includes(32) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="KS_label" x="440.8491" y="318.8552" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="KS_tspan" x="440.8491" y="318.8552" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">KS</tspan>
                                    </text>
                                </g>
                                <g id="g4976">
                                    <path id="NE" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m482.6475 271.2894 2.8754 6.2438-.1232 2.054 3.0808 4.8779 2.4236 2.7933h-4.498l-38.7361-.8216-36.3537-.801-19.8199-.6983 1.0167-19.0395-28.6968-3.2739 3.7216-38.3787 13.8637.9242 17.92 1.027 15.8868 1.0064 21.1858 1.027 9.571-.4109 1.8485 2.0231 4.2618 2.6392 1.027.8216 3.8613-1.2323 3.471-.4108 2.4441-.2054 1.6226 1.2323 3.6148 1.4377 2.6495 1.407.4108 1.4171.8216 1.828h1.6225l.7189.041.7907 4.1592 2.5982 7.5274.5134 3.3376 2.2593 3.358.493 4.5494 1.4377 3.7689.2053 5.7508Z"
                                        className="state ne" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(33)}
                                        style={{ fill: selected.includes(33) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NE_label" x="431.5131" y="261.248" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="NE_tspan" x="431.5131" y="261.248" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">NE</tspan>
                                    </text>
                                </g>
                                <g id="g4971">
                                    <path id="SD" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m474.052 238.6841-.0513-.5134-2.5674-4.3132 1.6431-4.1796 1.335-5.2374-2.4851-1.8485-.339-2.4338.719-2.2593h2.824l-.1027-4.4364-.308-26.8236-.5443-3.3478-3.6251-2.9782-.8832-1.4788-.0513-1.4377 1.8074-1.335 1.3658-1.4993.2054-2.362-51.9015-1.4172-48.8207-3.0808-4.7444 56.6254 13.001.8216 17.766 1.0577 15.815.8216 21.1857 1.1502 10.6596-.38 1.7458 2.0025 4.6417 2.8755.6778.6572 4.0462-1.294 5.8227-.5442 1.4993 1.1912 3.7484 1.4377 2.6187 1.4377.3594 1.335.9242 1.982 1.9923-.1848Z"
                                        className="state sd" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(34)}
                                        style={{ fill: selected.includes(34) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="SD_label" x="423.8655" y="200.3311" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="SD_tspan" x="423.8655" y="200.3311" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">SD</tspan>
                                    </text>
                                </g>
                                <g id="g4966">
                                    <path id="ND" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m473.025 171.9331-.5442-7.4966-1.4993-6.059-1.6842-11.5838-.4108-9.756-1.5404-2.7522-1.5712-4.6212.0308-9.2835.5546-3.389-1.6431-4.8779-25.5092-.4826-16.5645-.5751-23.6196-1.1502-20.4361-1.8998-6.2438 59.7165 48.9336 2.978 51.7372 1.2324Z"
                                        className="state nd" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(35)}
                                        style={{ fill: selected.includes(35) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="ND_label" x="424.798" y="149.2706" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="ND_tspan" x="424.798" y="149.2706" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">ND</tspan>
                                    </text>
                                </g>
                                <g id="g4961">
                                    <path id="WY" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m370.6393 184.6877-95.0946-11.9638-12.5697 78.6327 100.907 12.0665 6.7367-78.7457Z"
                                        className="state wy" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(36)}
                                        style={{ fill: selected.includes(36) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="WY_label" x="311.7341" y="222.3014" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="WY_tspan" x="311.7341" y="222.3014" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">WY</tspan>
                                    </text>
                                </g>
                                <g id="g4936">
                                    <path id="MT" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m378.4954 107.965-27.3166-2.4954-26.0842-3.163-26.0638-3.5942-28.8159-4.724-16.4104-3.0294-29.1651-6.1617-3.9845 18.9779 3.05 6.7059-1.2324 4.0667 1.6431 4.0667 2.855 1.2323 4.1077 9.5505 2.403 2.8344.4108 1.0269 3.0603 1.0064.4108 1.828-6.326 15.6505v2.2387l2.2387 2.8446h.8216l4.272-2.6495.6162-1.0269 1.4172.6162-.2054 4.6828 2.4441 11.1936 2.6495 2.2285.8216.6162 1.6225 2.023-.4107 3.05.6161 3.0603 1.027.8216 2.023-2.054h2.4442l2.8754 1.4378 2.2284-.8216h3.6662l3.2657 1.4378 2.444-.4108.4109-2.6495 2.6392-.6162 1.2323 1.2323.4108 2.8447 1.2631.7394 1.674-9.8176 95.0945 11.933 7.856-76.7123Z"
                                        className="state mt" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(37)}
                                        style={{ fill: selected.includes(37) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="MT_label" x="304.2251" y="144.8938" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="MT_tspan" x="304.2251" y="144.8938" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">MT</tspan>
                                    </text>
                                </g>
                                <g id="g4956">
                                    <path id="CO" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m388.1383 342.6412 4.3748-76.7432-101.0303-11.2347-10.8855 78.1809 107.541 9.8072Z"
                                        className="state co" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(38)}
                                        style={{ fill: selected.includes(38) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="CO_label" x="328.0994" y="305.4218" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="CO_tspan" x="328.0994" y="305.4218" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">CO</tspan>
                                    </text>
                                </g>
                                <g id="g4941">
                                    <path id="ID" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m182.0317 213.3496 7.6096-30.4488 1.222-4.2412 2.249-4.8061-.688-1.2118-2.2593-.0513-1.1296-1.4994.4108-1.0988.308-2.742 1.4172-1.982 2.6804-3.2348 1.6225-.9756 1.027-1.027 1.1912-2.557 3.4505-5.1758 3.4505-3.8613.2054-3.3478-3.05-2.3414-1.376-3.9024 12.1383-56.307 12.0666 2.2592-3.923 18.9984 3.1836 6.6546-1.4172 4.1488 1.7458 4.1078 2.8035 1.1296 3.4197 8.4928 3.122 3.9332.4518 1.0269 2.9781 1.0064.3286 1.8793-6.213 15.4452-.1335 2.2798 2.3415 2.937.8215-.041 4.3645-2.6906.6162-.9654 1.376.5854-.2464 4.7547 2.4441 11.1936 3.4916 2.8139 1.4993 1.9306-.308 3.1424.6264 2.9884.9448.9756 2.2079-2.095 2.5468.0412 2.6084 1.181 2.4647-.6162 3.3889-.1335 3.543 1.4377 2.444-.2773.4416-2.7009 2.6187-.6777 1.1297 1.335.38 2.629 1.2733 1.0782-7.7944 47.4343s-35.3986-6.5313-41.6219-7.8766Z"
                                        className="state id" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(39)}
                                        style={{ fill: selected.includes(39) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="ID_label" x="221.9714" y="191.1245" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="ID_tspan" x="221.9714" y="191.1245" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">ID</tspan>
                                    </text>
                                </g>
                                <g id="g4946">
                                    <path id="UT" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m280.7513 332.988-74.6174-10.557 18.3412-100.0444 41.6732 7.774-1.3145 9.4478-2.054 11.707 6.9422.8216 14.6236 1.6123 7.3118.76Z"
                                        className="state ut" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(40)}
                                        style={{ fill: selected.includes(40) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="UT_label" x="245.936" y="292.9065" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="UT_tspan" x="245.936" y="292.9065" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">UT</tspan>
                                    </text>
                                </g>
                                <g id="g4911">
                                    <path id="AZ" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m178.653 397.4489-2.3414 1.9204-.2875 1.294.4313.8625 16.8418 9.489 10.8137 6.747 13.1037 7.6198 14.9933 8.9139 10.937 2.1565 22.2331 2.403 15.3733-105.8979-74.607-10.598-2.7523 14.5826-1.4377.0205-1.5199 2.3414-2.2592-.1027-1.1297-2.4338-2.4338-.3081-.8216-1.027h-.801l-.8215.5135-1.7253.9243-.1027 6.1924-.2054 1.5096-.5134 11.1936-1.335 1.9204-.493 2.9473 2.4339 4.3748 1.1296 5.186.6983.9243.9243.5134-.1027 2.0231-1.4378 1.2323-3.05 1.52-1.7252 1.7252-1.335 3.2451-.5135 4.3645-2.5365 2.4338-1.828.6162.1232.7394-.4107 1.5199.4107.7188 3.2554.5135-.5134 2.4236-1.335 1.9306-3.3479.8216Z"
                                        className="state az" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(41)}
                                        style={{ fill: selected.includes(41) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="AZ_label" x="226.6963" y="389.0629" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="AZ_tspan" x="226.6963" y="389.0629" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">AZ</tspan>
                                    </text>
                                </g>
                                <g id="g4921">
                                    <path id="NV" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m224.5264 222.284-21.0522 114.5036-1.6431.3286-1.407 2.136h-2.1154l-1.3042-2.4338-2.3312-.3286-.688-.9756-.9243-.0513-2.4646 1.4582-.2773 6.0384-.3286 5.1347-.3081 7.6302-1.2837 1.869-2.1566-.955-61.565-92.63 16.924-60.0759 82.9459 18.3617Z"
                                        className="state nv" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(42)}
                                        style={{ fill: selected.includes(42) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="NV_label" x="170.8072" y="273.5754" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="NV_tspan" x="170.8072" y="273.5754" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">NV</tspan>
                                    </text>
                                </g>
                                <g id="g4926">
                                    <path id="OR" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m182.0625 213.3701 7.8766-30.9417.9243-3.7688 2.1052-4.991-.5443-1.0269-2.2593-.0513-1.1296-1.4994.4108-1.294.4416-2.8753 3.964-4.8883 1.6225-.9756 1.027-1.027 1.3144-3.1629 3.5943-5.0525 3.1835-3.43.2054-3.0808-2.9062-2.1771-1.5918-4.1283-11.2963-3.2143-13.4324-3.1527-13.761.1027-.3902-1.2324-4.8882 1.8485-3.9743-.5135-2.1565-1.4171-1.1297.6161-4.159-.2053-1.5405-1.2324-4.6726-1.828-.7188.1028-3.8613-1.3145-1.7458 1.6225-5.4941-.308-5.299-3.656.6162-.7188.2053-6.901-2.0538-3.4608-3.656-.5135-.6161-2.2387-2.095-.4108-5.1655 1.828-2.0025 5.7508-2.8754 8.9036-2.896 5.7508-4.457 12.5082-5.7713 12.0665-7.2091 11.1936-1.7253 2.5982-.7188 7.6199.3389 10.7417 100.3319 23.4143Z"
                                        className="state or" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(43)}
                                        style={{ fill: selected.includes(43) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="OR_label" x="136.3154" y="174.0096" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="OR_tspan" x="136.3154" y="174.0096" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">OR</tspan>
                                    </text>
                                </g>
                                <g id="g4931">
                                    <path id="WA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m140.5023 64.1045 3.8715 1.2837 8.6469 2.4441 7.6301 1.7253 17.8688 5.032 20.436 5.032 13.5762 2.8446-12.1487 56.5227-11.091-3.1321-13.8123-3.1836-13.5864.0308-.4108-1.1912-4.9806 1.9306-4.1078-.6572-1.8998-1.4069-1.1707.5854-4.2105-.1233-1.5198-1.2015-4.6932-1.8793-.647.1335-3.9023-1.3556-1.6944 1.6123-5.5866-.267-5.2785-3.6661.6881-.8216.1027-6.8291-2.0333-3.4197-3.6662-.5443-.6162-2.2387-2.0128-.4108-3.1835 1.0885-2.0128-2.8548.2875-2.588 2.4442-.2875 1.4377-3.5943-2.3004-1.0064.1438-3.3067 3.9024-.5751-2.4647-2.4441-1.294-6.3157.5752-2.5981v-7.014l-1.5404-2.8755 2.0025-8.3182 1.8793.4313 2.1566 2.588 2.4646 2.29 2.8754 1.7253 4.0256 1.869 2.7317.575 2.5982 1.294 3.0191.8524 2.0231-.1438v-2.136l1.1502-1.027 1.8485-1.1296.308.9961.2773 1.5815-2.0128.4416-.2772 1.869 1.5814 1.294 1.0065 2.1565.575 1.7458 1.3145-.154.1438-1.1502-.8626-1.1501-.4314-2.8755.719-1.5712-.5752-1.294v-2.0025l1.5815-3.1527-1.0064-2.3003-2.1566-4.3131.2773-.7189 1.0064-.7189Zm-8.421 5.299 1.7767-.1335.4313 1.2324 1.3761-1.4378h2.0847l.7188 1.3556-1.3658 1.4993.5751.7189-.647 1.7971-1.2323.3697s-.7805.072-.7805-.2054c0-.308 1.2837-2.3106 1.2837-2.3106l-1.5096-.4929-.308 1.294-.6368.575-1.3658-2.0128-.4313-2.2592Z"
                                        className="state wa" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(44)}
                                        style={{ fill: selected.includes(44) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="WA_label" x="159.5263" y="108.7343" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="WA_tspan" x="159.5263" y="108.7343" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">WA</tspan>
                                    </text>
                                </g>
                                <g id="g4916">
                                    <path id="CA" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m178.4682 397.069 3.4916-.4314 1.335-1.7869.4827-2.6187-3.163-.5134-.4621-.6162.4108-1.7971-.1335-.5135 1.715-.5545 2.7008-2.5263.5135-4.4364 1.2323-3.0295 1.7458-1.9203 3.1219-1.4172 1.4788-1.4377.0719-1.8485-.8935-.5135-.9037-.9653-1.027-5.1963-2.403-4.2926.5135-3.122-2.1566-.9242-61.5341-92.599 16.8418-60.076-59.7679-13.9663-1.335 4.2104-.154 6.6135-4.6007 10.4953-2.7317 2.3004-.2875 1.0064-1.5815.7188-1.3042 3.738-.7189 2.8755 2.4647 3.7278 1.4377 3.738.9961 3.1527-.2875 5.751-1.5815 2.7316-.5751 5.1655-.8729 3.3067 1.602 3.4505 2.4441 4.0256 2.0231 4.3132 1.1604 3.5942-.2875 2.8755-.2875.4108v1.8793l5.032 5.5968-.4313 2.1565-.5751 2.0128-.5854 1.7458.1438 7.3118 1.8793 3.3068 1.7252 2.3003 2.4442.4313.8728 2.4442-1.0064 3.163-1.869 1.4376h-1.0064l-.7188 3.4403.4313 2.5982 2.8754 3.8818 1.4377 4.7547 1.3042 4.1694 1.1605 2.7214 3.0294 5.1655 1.294 2.3003.4313 2.5879 1.4377.8626v2.1566l-.7188 1.7253-1.5815 6.3259-.4313 1.7253 2.1565 2.4338 3.7484.4313 4.0256 1.5712 3.4607 1.869h2.588l2.598 2.7317 2.2902 4.3132 1.0064 2.023 3.471 1.869 4.3132.719 1.3042 1.8484.575 2.8754-1.2836.5854.2875.8524 2.8755.7188 2.4646.1438 2.8036-1.4993 3.4607 3.738.7189 2.0128 2.3003 3.738.2876 2.8755v8.3182l.4313 1.5917 8.9344 1.294 17.5606 2.4441 12.3438 1.2118Zm-78.53-38.8492 1.1502 1.3659-.1438 1.1501-2.8754-.0821-.5135-1.0783-.5648-1.294 2.9576-.0616Zm1.7253 0 1.0885-.575 3.1835 1.869 2.7214 1.0783-.7805.575-4.0358-.2053-1.4377-1.4378-.719-1.2939Zm18.4438 17.6018 1.5917 2.0847.7189.8729 1.376.5134.5136-1.3042-.873-1.5815-2.3927-1.7971-.9243.1335v1.0783Zm-1.294 7.702 1.5815 2.7933 1.0886 1.7252-1.3042.2054-1.1502-1.068s-.6367-1.294-.6367-1.643v-1.9513l.4313-.0719Z"
                                        className="state ca" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(45)}
                                        style={{ fill: selected.includes(45) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="CA_label" x="119.5733" y="314.6612" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="CA_tspan" x="119.5733" y="314.6612" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">CA</tspan>
                                    </text>
                                </g>
                                <g id="g5156">
                                    <path d="m768.4754 282.4728 42.3099 32.061Z" id="DC_line" stroke="#000" strokeOpacity={1}
                                        style={{ strokeWidth: '1.02694' }} /><text id="DC_label" x="822.9463" y="324.1347"
                                            fontSize="9.8915" strokeWidth=".8246">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="DC_tspan" x="822.9463"
                                            y="324.1347" fontStyle="normal" fontWeight={400} fontSize="12.3643" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".8246">DC</tspan>
                                    </text>
                                    <path id="DC" fill="#cc3333" stroke="#000" strokeLinecap="round" strokeWidth="0.8216"
                                        d="M772.8604 280.306a5.3504 5.3504 0 0 1-10.7007 0 5.34 5.34 0 0 1 10.6802 0Z" fillOpacity={1}
                                        strokeMiterlimit="3.999" strokeDasharray="none" strokeOpacity={1}
                                        data-originalstrokewidth="0.8216" onClick={() => handleClick(46)}
                                        style={{
                                            fill: selected.includes(46) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white',
                                            strokeWidth: '0.8216'
                                        }} />
                                </g>
                                <g id="g5026">
                                    <path id="TN" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m670.2693 340.2279-46.2431 4.4569-14.0383 1.5815-4.1077.462-3.4608-.0204-.2054 3.6456-7.2913.2362-6.1821.5853-6.784-.2082-1.1453 1.2195-.7086 5.1855-1.3337 4.8428-.4806 2.4647-1.2015 3.8818-.2876 2.3003-2.9966 1.863 1.8916 2.8548-.0174 2.1935.0626 2.2593 90.9252-8.6673.3492-3.5225 1.6123-1.335 2.5365-.6572.6162-3.2862 3.6353-2.4133 3.6148-1.335 3.6457-3.163 3.9434-1.7972.4827-2.7316 3.6148-3.5327.4827-.1027s.0308 1.027.7496 1.027c.7189 0 1.7253.308 1.7253.308l2.023-3.1835 1.8486-.5853 2.023.2464 1.4172-3.1424 2.6392-2.3414.3697-1.7253.2773-3.3067-1.9101-.1746-2.3209 1.8074h-6.254l-16.3284 2.136-7.1885 1.6945Z"
                                        className="state tn" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(47)}
                                        style={{ fill: selected.includes(47) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="TN_label" x="631.3709" y="363.5384" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="TN_tspan" x="631.3709" y="363.5384" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">TN</tspan>
                                    </text>
                                </g>
                                <g id="g5011">
                                    <path id="AR" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m578.6252 362.2762-3.5532.6367-4.5493-.5648.3697-1.4377 2.67-2.2593.8216-3.2656-1.6226-2.6495-69.8626 2.2387 1.4171 6.1v7.3118l1.2323 9.756.2054 33.6322 2.0334 1.7458 2.6392-1.2323 2.4441 1.0269.6162 5.833 49.5498-1.0064 1.027-1.8485-.2568-3.163-1.6431-2.6495 1.4377-1.3144-1.4377-2.2388.6161-2.2284 1.2324-4.9704 2.2387-1.8485-.6162-2.0128 3.2862-4.7752 2.4339-1.2324-.1027-1.3145-.308-1.6225 2.5467-4.991 2.136-1.1296.0504-3.0295.0174-2.1945-1.8916-2.8539 2.9966-1.8629.2876-2.3003 1.2015-3.8818.3574-2.4133Z"
                                        className="state ar" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(48)}
                                        style={{ fill: selected.includes(48) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} /><text
                                            id="AR_label" x="536.9674" y="392.7065" style={{
                                                fontSize: '12.3233px', strokeWidth: '1.02694'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '1.0546', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="AR_tspan" x="536.9674" y="392.7065" fontStyle="normal" fontWeight={400}
                                            fontSize="15.4041" fontFamily="Arial" textAnchor="middle" fill="#000000">AR</tspan>
                                    </text>
                                </g>
                                <g id="g5167">
                                    <path id="Palau"
                                        d="m263.6072 603.0658-.7665 1.2277.0596.8545.4905.6087.8252-.4813.363-1.4138-.3337-.7857Zm-2.6808 21.1186-.177.266.177.6866.5592 1.1388.187.8251h-.0192l.4713 2.2188-.2357.9718-.5895.1962v-.0192l-.5886.1962-1.2772.1173-.8435.4035-.5702.7362-.4511 1.1387.0394.078c-.0394-.078 0 .0201 0 .0201l.0587.7858-.0193.3236-.089-.0394-.5693.4813-.6088 1.0892-.363.4218.903.6784.442.4713.177.4814-.1963.7949-.452.4217-.4712-.0981-.255-.7555-.5014.2943-.3824.4814-.2457.5886h.0092l-.1174.6482-.0091.7564.1375.0981.2934-.0202.4327.3732.3924.8252.3338 1.1488 1.0314.3924-1.0406-.3924.1962.7261.5684 1.4431.099.3438.2357.1962.5593.1183.2659-.1577.4703-.815.2265-.2054.3236.0385.5107.3337.5987.0596.2659.0981.2154-.177.1963-.805-.4906-2.1793.1669-1.257 1.07-1.7677.1962-.9324-.0092-.0192.1173-.5502.2155-.2658-.0183-.3622-.629-.8444.0092-.3832.8838-1.5706.5208-1.9639h-.01l.0586-2.7689-.3823-2.7487.0091-.0091v-.0101h-.0192l-.7564-1.9254-.2842-.4126-.4915-.3328Zm-7.0002 21.6293-.3438.4319-.0394.7069.1577.8646.883-.8839.4913-.187.706.2356.3154.5208.3924.8435.4905.629.5208-.167.177-1.168-.8646-.9233-1.2369-.618-.903-.2658Zm-.5895 2.69.0394.3732.2164.6482.0092.6877-.3136.55-1.6686 1.8356-.629.441-.3236.0596-1.7677-1.9437-.1467.1962.0486 1.0498.1375.7069.353.5702.5207.3824.6776.1375.7463-.3237 1.1094-1.3651h.0192l.452-.3237 1.0407-.0091.6188-.178.2448-.3923-.2943-.4905-.4419-.5795-.1284-.4914.7372-.2448-.1174-.4621-.187-.3136-.2255-.2264-.2953-.176Zm-7.7263 14.1085-1.5705 3.849-.177 1.1185.2256.2851.4217-.4905.6583-1.1983.4318-.1962.4915-.0092.176-.2164-.4905-.7655.4218-.9334.197-.2934-.0494-.462-.088-.354-.2164-.2255-.4126-.0981Zm-5.1343 8.149-1.0415.0394-.078.8737.5199 1.1589.7949.8536v.01l.6684-.54.1568-.893-.2944-.9131Zm-28.568 22.4516-1.168.088-.9426.6675-.5208 1.0407.3934.6188 1.1286-.2255 1.0012-.6088.5703-.9031Zm31.457 4.82-.3338.2062-.4611.5895.1962.6482.8545.2256.883-.6675h.01l-.363-.805Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".7857" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.7857"
                                        pointerEvents="visible" style={{
                                            fill: 'none', stroke: 'none', pointerEvents: 'visible',
                                            display: 'none'
                                        }} /><text id="Palau_label" x="229.1879" y="610.2988"
                                            style={{ fontSize: '11.0022px', strokeWidth: '0.916846', display: 'none' }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="Palau_tspan" x="229.1879" y="610.2988" fontStyle="normal" fontWeight={400}
                                            fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">Palau</tspan>
                                    </text>
                                </g>
                                <g id="g5173">
                                    <path id="Federated_States_of_Micronesia"
                                        d="m325.8152 635.6973-1.1781.1063-.8252.9645.2356.9325 1.093-.4823v.0431l.9113-1.0397Zm-19.3344 13.4501-1.3606.9113-.9966.9105-.5575.8893-.429 1.2332-.2357 1.3927-.0963 1.3716-.7179-3.6858-.8361-.9755-1.7145 1.168-.4933 1.5541-.5684 4.6943-.7702.9746-1.8868 1.8649-1.5862 4.3073-.6748 4.8226.8573 3.3648 1.2652-1.886 5.5827-12.1096 1.0287-1.3386 1.511-.6226 1.2102 2.9477 1.7796.6418 1.2322-.9425 1.5009-2.0143 1.2212-2.2188.4291-1.6072-2.5076 1.3395-1.7145-.75h.0422l-.5134-2.0152 1.0819-2.4003v-1.8218Zm52.3207 34.9676-.1925 1.2212.8251.4823.1926.0963.1925-.9426Zm-6.3977.2035-.2898.5685.4823.2457Zm-2.3903.0642-.385 1.3386.9425-.385.032-.9646Zm.5575.9645.011-.011Zm9.3133 1.4789.1394.7179-.1926 1.5.4814-1.522Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".8573" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8573"
                                        pointerEvents="visible" style={{
                                            fill: 'none', stroke: 'none', pointerEvents: 'visible',
                                            display: 'none'
                                        }} /><text id="Federated_States_of_Micronesia_label" x="322.664" y="610.4758"
                                            style={{
                                                fontSize: '11.0022px', lineHeight: '0.8', strokeWidth: '0.916846', display: 'none'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="Federated_States_of_Micronesia_tspan" x="322.664" y="610.4758" fontStyle="normal"
                                            fontWeight={400} fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">
                                            Federated States</tspan>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }}
                                            id="tspan1167" x="322.664" y="619.2775" fontStyle="normal" fontWeight={400}
                                            fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">of Micronesia
                                        </tspan>
                                    </text>
                                </g>
                                <g id="g5183">
                                    <path id="Guam" strokeMiterlimit="3.999"
                                        d="m580.6728 619.2197-1.907 1.962-1.1003 3.209-.7793 7.289-1.8979 2.8238-1.3478.5501-1.5586.0642-1.2836-.4584-.7793-1.4211-1.036-1.3478-.2384-.3942-.44-2.9614-.2385-.5318-.3667-.4584-.4401-.3668-.5501-.2567.7793-.7793.5043-.8068.275-1.0086.0917-1.3752-.1467-.6418-.3667-.8068-.4401-.6877-.8068-.6143.3484-.5867.6051-.3393.3117.4126 1.0544-.0917 4.63-2.6313 1.0636-.9169 4.2175-2.3838.8252-.8251.6876-.9169.6234-1.1369 1.6504-5.2077.495-.9443.917-.8435 1.2377-.7152 1.0635-.0733.431 1.0819.77 1.742 1.3295.9902 1.522.4584 1.3477.0917v.9168l-1.1002 2.0538-2.3838 3.3923-2.7047 2.4388Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".7335" strokeDasharray="none"
                                        strokeOpacity={1} data-originalstrokewidth="0.7335" pointerEvents="visible" style={{
                                            fill: 'none'
                                            , stroke: 'none', pointerEvents: 'visible', display: 'none'
                                        }} /><text id="Guam_label"
                                            x="568.3549" y="597.3621" style={{
                                                fontSize: '11.0022px', strokeWidth: '0.916846',
                                                display: 'none'
                                            }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="Guam_tspan" x="568.3549" y="597.3621" fontStyle="normal" fontWeight={400}
                                            fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">Guam</tspan>
                                    </text>
                                </g>
                                <g id="g5189">
                                    <path id="Northern_Mariana_Islands" strokeMiterlimit="3.999"
                                        d="m660.365 600.8498-.7142.297-.7683.5391-1.4275.431-.674.3364-.1347.243-.0275.6739-.2155.2695-1.0103.4035-.31.176-.4042.4987-.1348.5392.0403.6463-.0944.8087-.674 2.0886-.0806.849.1751.8086.4584.1348 1.2662-.297.243.2016.97.3374h.7683l-.2961-.7545-.431-.7546-.0274-.8086.3364-.7143.7152-.6197.4712.3374h.431l.3374-.2696.2695-.4988-.431-.7142-.055-.4988.9839-2.3984.4309-.6327.6207-.3777.6463-.728-.3768-.4034-.8361-.1357Zm-9.3518 10.74-1.213.8764-1.1451 1.4826-.674 1.3065-.0943.6738.1622.3778.673.916.297.8086.2155 1.5494.242.7684 1.0783.7142 1.1323-.8087.8352-1.5495.4044-1.4825-.189-.539-.7141-.9435-.2696-.485.0413-.849.2154-.8087.067-.7005-.2962-.728-.8087-.5794Zm-8.0847 18.0985-1.7256.1338-2.9641 1.1727-1.213.3364-1.8465.8087-1.6971 1.0516-.7152 1.1314.431.3777 1.0112.0404 1.8594-.2017 1.1323.2961.5795.4988.6738.2695 1.213-.607.4713-.5922.3777-.7151.4584-.6327.673-.243.849-.1347.4988-.3365.3365-.539.2163-.7684Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".8169" strokeDasharray="none"
                                        strokeOpacity={1} data-originalstrokewidth="0.8169" pointerEvents="visible" style={{
                                            fill: 'none'
                                            , stroke: 'none', pointerEvents: 'visible', display: 'none'
                                        }} /><text
                                            id="Northern_Mariana_Islands_label" x="606.6599" y="595.5568" style={{
                                                lineHeight: '0.8',
                                                textAlign: 'start', display: 'none'
                                            }} fontSize="8.3451" textAnchor="start" strokeWidth=".695">
                                        <tspan style={{ textAlign: 'start', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="Northern_Mariana_Islands_tspan" x="606.6599" y="595.5568" fontStyle="normal"
                                            fontWeight={400} fontSize="6.9543" fontFamily="Arial" textAnchor="start" fill="#000000"
                                            strokeWidth=".695">Northern Mariana</tspan>
                                        <tspan style={{ textAlign: 'start', fill: 'rgb(0, 0, 0)' }} id="tspan1169" x="606.6599"
                                            y="602.2333" fontStyle="normal" fontWeight={400} fontSize="6.9543" fontFamily="Arial"
                                            textAnchor="start" fill="#000000" strokeWidth=".695">Islands</tspan>
                                    </text>
                                </g>
                                <g id="g5205">
                                    <path id="American_Samoa" strokeMiterlimit="3.999"
                                        d="M613.0961 666.6967c-.2292.4951-.9719 1.1553-1.5403 1.192-.0642.55 1.1002 1.4027 1.5403 1.531l.4584.8894.321-.11.2108-1.0544-.5501-.7518v-1.3936l-.431-.275Zm-6.418.055-.8892.321c.4217.7793.7334 1.8336.8251 2.7138l.431.3484c.6692-.5317 3.1722-2.2554 4.0982-2.017l-.0641-.3301c-1.1644 0-3.429-.2934-4.401-1.036Zm23.1504 5.8679-.9168.8068-.8802-.275-1.7695.605-1.1002-.8068-.4584.2017-.3026.6602-1.1735.5134c.1283.9627 1.0085 1.6687 1.852 2.017.0733.431.7793 2.3839.7793 2.3839.4584.3667.6693.605 1.256.7884l.431-.2016c.8252-1.6687 1.7878-2.448 3.704-2.0354.6969.1467 1.4395.4034 1.9805.8893.275-.0275.6417-.4584.7701-.6876.0458-.5868 0-1.3753-.2292-1.9254l.7976-1.8337-.8893-.8527-.6418-.1283c-1.0269.385-2.2004.605-3.209-.11Zm-46.805 2.4755c-.0733.1283-.6417 1.1368-.6876 1.1919-.8618.9443-2.4296 1.1644-3.4107 2.072-.55.5043-1.0085 1.3203-1.742 1.6228l-.1191.5685-.4585.0917c-.6784.0733-1.3569 1.1919-2.5488 1.4486l-1.0085-.9444-1.4028.5502-.7151-.4401-1.7145-.055-1.4395.6417-.2017.8619-.5134.3667-.5685-.2017c-.5776.321-2.2463 1.7145-1.8612 2.5672.4126.3392 1.8979.8068 2.4205.9627l.3484-.055.3117-.5685.3668-.0917.5226.6051 1.0635.0642.5318 2.4755c.2384.4401 1.421.9444 1.8612 1.0819l1.1002 1.1919c.596-.8252.9443-1.7053.9443-1.7053l.4585.0916.3209.3668.5684-.1192c.4584-.596 1.1002-1.2836 1.4945-1.9254.3392-.5776.6418-2.723 1.8612-3.0072l.5684.055c1.0544-.9169 2.3288-1.8704 2.8056-3.264l-.11-.486c-.3026-.4584-.486-1.1735-1.0636-1.1918 0 0 .8252-.1834 1.1919-.5135l1.0452-.1375.4584 1.0727-.3117.7335.8527.761c.3667.0917 1.1552-.4584 1.3936-.6877l.5776.1467.9718-.3942 1.1002-1.4945 1.6504.5501.1558.9719h1.192l1.742-.8068 1.0452-.7152c.66-.55.6784-1.412.3667-2.1454l.22-.55-.3667-.0551h-1.357l-.7334.7518.165.4218s-1.1919-.055-1.4028-.11c-.22-.055-1.687-.5135-1.687-.5135l-1.0543-.2934-1.9987-.2292-.6877.2017-1.7787-.2384-.8893.3668c0-.6877.5226-1.1736.5134-1.9438h-.3392Zm12.1391 5.0151-.5134.5684.0275.3118.6418.0275.275.3117.2567-.0642.431-.4859-.1192-.275-.4585-.4126h-.55Z"
                                        fill="none" fillOpacity={1} fillRule="evenodd" stroke="none" strokeWidth=".7335"
                                        strokeLinejoin="round" strokeDasharray="none" strokeOpacity={1}
                                        data-originalstrokewidth="0.7335" pointerEvents="visible" style={{
                                            fill: 'none', stroke: 'none'
                                            , pointerEvents: 'visible', display: 'none'
                                        }} /><text id="American_Samoa_label" x="589.0289"
                                            y="658.4827" style={{ fontSize: '11.0022px', strokeWidth: '0.916846', display: 'none' }}>
                                        <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="American_Samoa_tspan" x="589.0289" y="658.4827" fontStyle="normal" fontWeight={400}
                                            fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">American Samoa
                                        </tspan>
                                    </text>
                                </g>
                                <g id="g5200">
                                    <path id="United_States_Virgin_Islands" strokeMiterlimit="3.999"
                                        d="m695.7865 670.08-.6877.2016.3484.4218.2292.7151.4585.6051.3392-.3392-.0275-1.1002-.6601-.4951Zm-3.5574 1.8611.6876.8252 1.467 1.1369-.8068.2567-1.3753-1.0086-3.3465-.1283-2.3288.5684-2.723 1.4028 1.4486 1.4303 2.9339-.8619 1.0819 1.192 1.4028.2933 1.962-.3392.8618.6051.4035-.8526.7976 1.632 1.0269.6692 2.888 1.1003.6602-.9627 1.0543-.3668.8069.275 1.0268-.1374-1.3477-2.2005-3.3007-1.9253-3.374-2.0171-1.9529-.5868Zm18.5386 1.4211-.8068.431.3667.715-1.6503.4585-1.522.6418-1.4027 2.0537 1.3752 1.2561 4.5843-.385 2.9156 1.6044.6417-2.2004-.9718-1.3295.6601-.2567 2.4296.8252 1.2836-.1834-.385-1.0085-1.632-.8618-1.3478-.6418-1.467-.275-3.0622-.8252Zm-18.401 4.0158-.3118.2567-.6968.7793-.2292.5777v.3667l.1558.2567.6418-.7701.3393-.5502.2567.0642.4034-.1833-.1192-.4585-.4584-.3484Zm8.1965 9.196-1.632.3392-1.531.9443-1.4304.6602-2.5671-.8252-.5502.5685-.2383.8893.0366 2.888-.0916 1.0361-.5043 1.2286 1.2836-.4584 14.0277-1.8704 1.4945-.431 2.8972-1.2835 1.4486-.4951 1.742-.1834v-.4767l-2.1729-.7152-2.6588-.1833-2.4572.5226-1.577 1.2835-.6418-.596-.706-.3667-1.4302-.5226-2.5672-1.7603-.1833-.2017Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".7335" strokeDasharray="none"
                                        strokeOpacity={1} data-originalstrokewidth="0.7335" pointerEvents="visible" style={{
                                            fill: 'none'
                                            , stroke: 'none', pointerEvents: 'visible', display: 'none'
                                        }} /><text
                                            id="United_States_Virgin_Islands_label" x="675.4581" y="657.079" style={{
                                                lineHeight: '0.8',
                                                display: 'none'
                                            }} fontSize="8.688" strokeWidth=".7243">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0}
                                            id="United_States_Virgin_Islands_tspan" x="675.4581" y="657.079" fontStyle="normal"
                                            fontWeight={400} fontSize="7.2403" fontFamily="Arial" textAnchor="middle" fill="#000000"
                                            strokeWidth=".7243">United States</tspan>
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} x="675.4581" y="664.0287"
                                            id="tspan1171" fontStyle="normal" fontWeight={400} fontSize="7.2403" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".7243">Virgin Islands</tspan>
                                    </text>
                                </g>
                                <g id="g5178"><text id="Marshall_Islands_label" x="452.2465" y="610.2988" style={{
                                    fontSize: '11.0022px'
                                    , strokeWidth: '0.916846', display: 'none'
                                }}>
                                    <tspan style={{ textAlign: 'center', strokeWidth: '0.840607', fill: 'rgb(0, 0, 0)' }} dy={0}
                                        id="Marshall_Islands_tspan" x="452.2465" y="610.2988" fontStyle="normal" fontWeight={400}
                                        fontSize="9.1685" fontFamily="Arial" textAnchor="middle" fill="#000000">Marshall Islands
                                    </tspan>
                                </text>
                                    <path id="Marshall_Islands"
                                        d="M473.4311 649.934a6.3657 6.3657 0 0 1-12.7313 0 6.3537 6.3537 0 0 1 12.7075 0Zm-66.4292-34.0012c-.0733.0092-.0458 0-.0366.0825l.055.0184.0366-.0459-.0183-.0458Zm-.2108.0734-.0917.0091-.0183.0275.0274.0275c.0276 0 .0734 0 .0917-.0275Zm.816.0091-.0734.0184-.0367.0825c-.0458 0-.0917 0-.1283.0183.0275.0917.1192.1559.2108.1834l.0734-.0092Zm-1.7145.4401-.0276.0275v.0275c.0184.0092.0459 0 .0642 0l.0184-.0458-.0184-.0092Zm-.2018.1192c-.0275 0-.0733.0275-.0825.055v.0275h.0642l.0275-.0275v-.0367Zm-.7793.0734c-.2383.2658-.55.66-.6784.8068-.165.1925-.3943.3484-.5501.55-.0917.0918-.1834.3668-.2018.4952-.0183.1558.0642.4034.1376.55.11.1835.3392.3118.4584.5044.1192.1833.165.3942.275.5776.1743.3117 1.3662 1.9529 1.5954 2.1454.0275.0275.0733.0458.11.0642.1192.0641.2567.0733.3759.1375.1375.0733.2567.2109.385.2659l.1376.055c.1834.0458.385-.0458.5593-.055Zm3.704.2017v.055c.0276.0275.0826.0366.1193.0366l.0091-.0366-.0458-.0459Zm.4585.0733c-.0275.0367-.0458.0642-.055.11l.0183.0275.055-.0091.0367-.0367-.0091-.0642Zm30.0359.4217c-.165.2384-.2292.2201-.4676.4768-.0367.385-.4584.5318-.4676.9169 0 .1558.1375.3575.1742.5134.0642.055.0917.1283.1467.1834.2475.2292.871.6693 1.0269.871.22.275.275.9168.7335.871.0733-.0092.1833-.0275.2292-.1009 0-.1833-.0734-.4584-.0367-.6418l-.5868-1.3477 2.3105.6142c-.0917-.0366-.1926-.0733-.2751-.1191-.3667-.1834-.165-.6602-.4584-.7977-.11.0183-.22.0458-.33.0092-.0643-.0642-.1193-.1467-.211-.1926l-.0916.0459c-.0459.0917-.4218.3575-.596.385l-.3576.0459Zm3.0623 2.3564c.3025.11.651.1925.9535.2567Zm-32.7681-2.3564-.0642.0276.0367.055.0641.0091v-.0458Zm.3209 1.0453c-.055.1375-.0367.0641.0275.1375l.0825.0183.0183-.0458a.275.275 0 0 0-.1283-.11Zm34.0516 1.8795.3668.2384c.0183.11.055.2292.1008.33.0367-.0183.0734-.0916.0917-.1191-.1008-.4218-.2017-.3668-.55-.4585Zm-33.3273.5226-.055.0458v.0459l.0367.0917a.1467.1467 0 0 0 .0733-.055Zm-.2384.4584h-.0917l-.0183.0275a.9003.9003 0 0 0 .0275.3576c.0458-.0917.11-.22.1192-.33Zm34.29 1.1277-.0275.0459c.0367.0917-.0733.2384-.1008.33l.0275.055a.3026.3026 0 0 1 .11-.0916.9168.9168 0 0 0 .0367-.321Zm-34.8218.055c-.2017.2384-.55.2018-.6601.3301-.0458.275.3484.2476.4951.1284.1559-.1284.1375-.275.165-.4584Zm31.8513.3301c-.0275.0275-.0734.0275-.0917.0642l.0183.0458c.055 0 .0917-.0366.1375-.055l-.0183-.0458Zm-.8435.2109c-.0367 0-.0917.0183-.1284.0367l.11.0183.0275-.0092Zm-.6602.0183-.0458.0184c.0275.11.1192.22.2292.1558l.0183-.055a.9627.9627 0 0 1-.2017-.1192Zm30.0084.1834-.0917.0458c-.11.2292-.55.3668-1.0543.431l1.9253-.11c-.0366-.0643-.0733-.11-.1008-.1834-.1834-.0825-.4768-.165-.6785-.1834Zm.7702.3667c.1833.321.4217.486.8251.5685.2109.0367.4218.0917.6418.0733.1559-.0183 1.1002-.4126 1.2836-.5042.1834-.0917.3576-.275.5868-.3393Zm3.3373-.2017.22-.0091a.5574.5574 0 0 0-.22.0091Zm-5.2536.3118-.9993.0641c.2934 0 .6601-.0091 1.0085-.0641Zm-1.9803.1375c-.0367.0275-.0734.0733-.0734.1192.0367 0 .0917-.0184.11-.0459v-.0366Zm7.5181.385-.0917.0092v.055l-.0275.0459v.0367l.0642.0091.0367-.0183.0366-.0734Zm6.9405.2293h-.0458c-.0734.0183-.11.0733-.1926.11-.1466.055-.44 0-.5134.0367-.1192.055-.2384.4767-.3576.605-.0641.0826-.165.1101-.2383.1834-.1009.2568.3117.7427.8618.2384l1.3753-.9902c-.0367-.0275-.7702-.165-.8435-.1833Zm-15.0087 0c-.055.1192-.0917.275-.1284.385-.1192.3668-.3209.7152-.4584 1.0728-.11.275-.2476.706-.275.9993 0 .165.0274.3392.0183.5043-.0184.2017-.0917.4126-.0917.6143 0 .11.0825.3117.165.3942.0459.0459.2567.165.4951.2842Zm16.5582.5593c-.0458.0275-.0642.0641-.0734.11h.0734l.0183-.0275.0184-.055Zm-8.9576.0183-.6143 1.0085c.0367 0 .0734 0 .11-.0183l.1284-.0917c.3026-.2934.275-.5776.3667-.8985Zm-.6143 1.0085c-.4676.0459-.9718-.6784-1.742.596-.3667.6326-.1742 1.6044-.0917 2.4021Zm10.0395-.7151v.0642l.055.0275.0734-.055a.22.22 0 0 0-.1284-.0367Zm.11.1833-.0183.0367a.2503.2503 0 0 0 .0642.1192c.0458 0 .11-.0275.1283-.0733v-.0459a.2109.2109 0 0 1-.1742-.0367Zm45.6131.431c-.1008 0-.2384.0183-.3209.0916l.5043.5777c.0183-.2568.055-.5043-.1834-.6693Zm.1834.6693c0 .1467 0 .2934.0642.4309.1558.2842.5134.4217.8434.5868Zm-.7335-.0917-.055.0091c-.4584.321.0458 1.0453-.2567 1.5312v.0733l.5042-1.2102c.0642-.0642 0-.2842-.0275-.3668a.2292.2292 0 0 0-.11-.0366h-.0642Zm-47.2543.4126-.0733.0641c.0183.2017 0 .6418.1834.7702.1558-.055.2934-.165.4584-.2017Zm1.5404.2292-.0459.0275c-.055 0-.1559 0-.2109.0275l-.0183.0366c0 .0092 0 .0276.0183.0276.0367 0 .1834-.055.22-.0734Zm47.5843 1.146-.0459.0275c-.0183.1192-.1375.1467-.2108.2109l.0183.055.4034-.1742.0275-.0733-.0367-.0367c-.055.0183-.1008 0-.1558-.0092Zm-3.5116.0367h-.0916c-.0917.0183-.1834.0642-.2843.1467l.266 1.0819.009-.0734c.0826-.4034.321-.4676.3852-.7243a.3392.3392 0 0 0-.2843-.4217Zm-2.723.0733-.0733.0642v.1009a.9168.9168 0 0 1 .1558.275c.4126.1559.7335 1.3753.9169 1.6779l.6418.6142c.2108-.0366.275-.0916.3667-.165l-1.1369-2.0629c-.3667.0183-.6051-.3117-.871-.5043Zm4.4009.3026-.0184.0642.0367.0642.0917.0275.055-.0092a.3924.3924 0 0 0-.0825-.1192Zm-61.6304.1467-.0092.0642-.1284.0917-.0091.055c.0642-.0092.1558-.0092.1834-.0734l.0183-.0733Zm-3.8508.3576a.7344.7344 0 0 0-.11 0c-.4768.0366-.9535.33-1.3936.4584-.1559.055-.4034.0092-.596 0l2.934.3667c-.1192-.1283-.3118-.2017-.3943-.3392-.11-.165-.1284-.3943-.3392-.486h-.11Zm-2.1087.4584-1.2561-.1467c.385.0825.8068.1467 1.1736.1559h.0917Zm10.1678.0825h-.0642c-.0091.0917-.0183.1925-.055.275-.0733.055-1.0085.165-1.0819.1284l-.0366.0184a.7335.7335 0 0 0 .2108.0916c.3118-.0458.486-.1558.8435-.1191.0367 0 .0917.0091.1192-.0184 0-.1375.165-.3667.0642-.3759Zm-2.4021.0092-.0917.0458a.2292.2292 0 0 1-.055.0825.275.275 0 0 1-.1834-.0091l-.0458.0091.0366.0734.0459.0275c.0733 0 .1375-.0275.2108-.0367.0459-.0367.0826-.1375.0826-.1834Zm-9.792.0642c-.0458.0275-.055.1467-.0458.1925.0367-.0367.1192-.11.0917-.1742Zm67.755.4767-.0459.0367-.0183.0458.0275.0367h.0458a.221.221 0 0 0 .0367-.0917Zm-67.8283 0c-.0183.0183-.0367.0459-.0367.0734.0367.0183.1009.0458.1375.0183v-.0367a.22.22 0 0 0-.1008-.0641Zm1.0269.33h-.055v.0367c.0641.0459.1925.055.2567.0276l-.0092-.055-.1284-.0092Zm.4584 0h-.0642l-.0183.0643.0183.0183c.0275 0 .0734-.0092.0917-.0275v-.0275Zm1.256.0184c-.0458 0-.0916.0275-.1375.0459l-.0091.055c.0458 0 .0825-.0459.1375-.0367Zm-.3942.0734a.2109.2109 0 0 1-.0917.0366l-.0458.0642c.0734 0 .165 0 .2292-.0458v-.0367Zm2.393.0733.0275.0642.0458.0183.0184-.055Zm-.8527 0-.0917.0184.0275.0458c.055.0092.1009.0183.1467 0v-.0367c-.0183-.0183-.0458-.0183-.0825-.0183Zm68.7176 9.0768-.0366.0458v.0825l.0642.0367.0733-.0275.0183-.055c-.0183-.0367-.0733-.0642-.1192-.0825Zm.1192.2109v.055l.0367.0367h.0459l.0091-.0642Zm.1376.165-.0276.0733c.0184.055.0092.0642.0459.1009.0367.0092.055.0275.0642-.0092Zm-.7335.4493-.0734.1558-.0366.22Zm-.11.3667-.5318 1.8153c.0917-.055.165-.11.22-.165.0642-.0825.0917-.1834.1467-.275l-.0275-.11c.165-.266.1375-.8527.1834-1.2561Zm1.0268-.3117c-.0458.055-.0917.1375.0184.11l.0275-.0367v-.0458Zm.1467 1.3202-.0458.0459v.0641l.0275.0184.0367-.0184c.0091-.0275 0-.0825-.0184-.11Zm-.0367.8894-.0458.0091c0 .0275 0 .0642.0275.0825h.0367l.0092-.0366a.0733.0733 0 0 0-.0276-.055Zm-2.2279.4492.0092.0825c.0183 0 .0458.0367.0642.0275a.1788.1788 0 0 0 0-.0825l-.0184-.0183Zm2.723.2017.0184.5501Zm-2.3104.6143c.11.1559.1375.3484.2567.4951.0642.0825.1559.1467.2476.1742.2292.0642.4859 0 .7426.0275Zm2.0354.5868-.0458.0458-.0184.0734.0275.0367a.5749.5749 0 0 0 .0917-.0734l-.0183-.0733Zm-81.1592.541c-.0275.0641 0 .11.0183.165l.0459.0183.0366-.0458c0-.0642-.0642-.1009-.1008-.1376Zm1.632.0366a.3117.3117 0 0 0-.0917.11l.0366.0917c.1192.0367.165.0917.2384.1834h.0917a.376.376 0 0 0 0-.2017l-.0733-.0642c-.0367 0-.11.0275-.1467 0a.275.275 0 0 1-.0184-.11Zm.1558 1.1369a.44.44 0 0 0-.11.4034c.0367.165.33.4951.5776.8527Zm-1.3294.0825c-.0458.0367-.0917.0917-.1284.1467.0092.0734.0367.1467.0734.2109.22.4492.6234.816.8068 1.2836l.0183.055-.5317-1.5587-.0275-.0641a.3466.3466 0 0 0-.2109-.0734Zm71.5048.8802h-.0458l-.0184.055.055.0367.0367-.0275v-.0367Zm-10.6079.6784-.0367.0459c.0459.0733.0917.1467.165.1925.0276-.0183.055-.0733.055-.1192-.0366-.0641-.1191-.0917-.1833-.1192Zm1.2378.22 1.797 1.3295-.0917-.1192c-.1375-.1375-.3209-.22-.4676-.3484-.1467-.1283-.2659-.3025-.4126-.4309-.3667-.33-.6234-.4217-.8251-.431Zm1.797 1.3295c.0917.1192.1833.2476.2842.3392.1192.0917.2384.0917.3667.1376Zm.6418.4768.2017.1558a.4612.4612 0 0 0-.0917-.1008.4328.4328 0 0 0-.11-.055Zm.2017.1558c.0458.0459.0825.0917.1375.1284l.055.0092Zm-3.6124-1.8978c.0183.0733.0092.0916.0917.1283.055-.0091.0917-.0367.1284-.0825-.055-.0458-.156-.0458-.2201-.0458Zm-59.5217 0-.1558.0642-.0275.0458c.0642 0 .1192.0458.1833.0275l.0276-.0825Zm59.6226.9168-.0276.7793a3.7807 3.7807 0 0 0 .0276-.7885Zm-123.7284.1559c-.1559 0-.3484.0458-.4401.1008-.7335.431-.0183 1.2836.3667 1.6595.1926.2017.6693.761 1.1002.9444l1.7787-1.6137c-.3667-.1467-.7518-.275-1.1369-.4126-.55-.2017-.9351-.495-1.5403-.66a.4786.4786 0 0 0-.1283-.0184Zm2.8055 1.1002.7335.44a.9994.9994 0 0 0-.3484-.2933l-.385-.1559Zm125.2779.1467-.0459.0183-.0183.0367v.0275l.0367.0275.055-.0458v-.0367Zm-4.3459.0092-.0367.0733v.0458a.2133.2133 0 0 0 .11.0734l.0276-.0367a.4795.4795 0 0 1-.0275-.1375Zm4.7951.2567-.0183.0917h.0458l.0459-.0367v-.055Zm.2292.1008-.055.0184-.0091.0458.0366.0275a.165.165 0 0 1 .0734-.0458v-.0275Zm.165.1376-.0458.0183.1559.0917-.0367-.0642Zm-125.7454.0091a.1925.1925 0 0 1-.1375.0092l.0092.055c.0275.0183.0825.0092.11 0Zm121.6197.2934-.0642.0092v.0733l.055.0367.0367-.0275a.165.165 0 0 0-.0275-.0917Zm-121.9864.275-.055.0276c.1742.0733.5868.2292.7701.1833l.0275-.0366-.0917-.055c-.1191.0183-.2383.0183-.3392-.0642a.3924.3924 0 0 1-.3117-.055Zm126.543.1376-.0366.0275.0275.0734.0275-.0092.0275-.0275v-.055Zm.2568.1834-.0458.0183c.055.0367.1467.0642.165.1375h.0275v-.0367a.8096.8096 0 0 0-.1467-.1191Zm-1.5403.3025v.0459c0 .0917.2017.0458.2476.0275l-.0184-.0275c-.0642 0-.1834 0-.2292-.0459Zm-.165.0734c-.0642.0275-.1376.0366-.2017.055v.0367c.0458.0366.1375.0183.1833-.0184Zm1.742.0458-.0184.055-.275.0917a.1568.1568 0 0 1-.055-.0367v.0734c.11.0367.44-.055.5134-.1375-.0275-.0367-.1192-.0459-.165-.0459Zm-2.6222.3484c-.1192.0825-.165.1192-.22.1375-.055.0184-.1192.0276-.3026.0459l-.0183.0275c.0916.0183.4125 0 .4859-.0734.0183-.0366.055-.0916.055-.1375Zm18.6578 5.006-2.0354.5318c.275-.0184.5593.0916.8252.0458.4126-.0733.8251-.385 1.2102-.5776Zm.871 0-.0642.0275a.2017.2017 0 0 1-.0733.0917v.0275c.0825-.0367.11-.0642.1925-.055l.0275-.0184-.0275-.055Zm-6.2437.4126-.0458.055.0275.0275.0275-.0275.0091-.0459Zm.6968.0641a.0935.0935 0 0 0-.055 0l-.0458.0367.22.0642.0275-.0092c-.0092-.0458-.0917-.0917-.1467-.0917Zm-1.5586.0459c-.0917.0642-.2017.11-.275.1834-.046.385-.0734.3117-.2568.5867 0 .2476.275.871.5043.9902h.11l.0642-.0733Zm7.6831.0458v.0184c0 .0275.0275.055.055.0733 0-.0275 0-.0642-.0183-.0917Zm-4.4925.0275c-.0642 0-.1192.055-.1559.11.0734 0 .11-.0366.1834-.055l.0183-.0275Zm.3025.1192-.055.0184a.1698.1698 0 0 0 .0642.0733l.0184-.0733Zm4.4467.0825-.0274.0276.0733.0916c.0367-.0458.0183-.0733-.0092-.1191Zm.596.7335h-.0367v.0459l.0917.0916c.0092-.0458 0-.0733-.0183-.11Zm.1834.2567c0 .22.1375.2476-.0092.5135l.0183.0367c.211-.055.2476-.4035.1192-.5502Zm-7.949.8894a.6308.6308 0 0 0-.156.055l-.0366.11c.0275.1467.6143.5776.7518.7702.0642.0733.6143.6784.6693.706.0917.0458 1.2194.22 1.3386.2016.0825-.0091.9627-.2017.9902-.22l.0733-.0458Zm7.6097.4126-.1191.1192c.0641.0183.1375-.0092.165-.0642 0-.055.0183-.0459-.0367-.055Zm-54.9649.0641a.4584.4584 0 0 0-.33.3668l.0275.055.1742-.0183a.2659.2659 0 0 1 .1283-.2018l.1284.0092.1008.1376h.0642a.3842.3842 0 0 0 0-.2018c-.0367-.0733-.22-.1375-.2934-.1467Zm54.644.1926c-.0733.0183-.11.0825-.1558.1283l.0183.0459.0183.0092c.055-.0367.0917-.0917.1284-.156Zm-1.9528.0458-.275.0092 1.3568.2934c-.22-.1284-.4859-.3026-1.0818-.3026Zm-.981.2843c-.046.0183-.101.0641-.1192.11h.0733c.0275-.0459.0733-.055.0917-.0917Zm-52.627.165-.3118.1925c.0917-.0275.1834-.0733.3026-.1925Zm-.3118.1925c-.2017.055-.3575-.055-.6418.0917-.2292.11-.22.3576-.33.5501Zm-6.207.0459 3.429 1.3936.11.0366a.3117.3117 0 0 0 .1284-.1283l.0183-.1192-.0458-.0917c-.2934-.2659-.706-.055-1.036-.1834-.2568-.0916-.5502-.1833-.7977-.3209-.2567-.1467-.6235-.4125-.9077-.4859-.3117-.0825-.5776-.0733-.8985-.0917Zm8.3158.0916c.1834.431.5684 1.4028.816 1.7145.2292.2751.4492.4401.7243.6602.1925.1558.3484.385.5501.55.0458.046.11.0734.1742.101Zm2.2646 3.0256 2.3105 3.1173c.0366-.165.0916-.275.11-.4584a1.742 1.742 0 0 0-.431-1.1736c-.1558-.165-1.0727-.6418-1.3477-.8802-.1834-.1466-.2934-.3483-.4584-.5042a.651.651 0 0 0-.1834-.1009Zm-11.3506-2.778c-.055.0275-.1191.0367-.1742.0733l.0459.0276c.0733-.0092.1467-.0092.22-.0459l-.0091-.0458Zm-2.237 0c-.1834.0183-.4401.1192-.6969.1742l1.7054.165c-.1834-.1467-.6968-.2934-.9352-.33h-.0734Zm-2.6039.165h-.0734l-.0183.0825c.0275.0367.2292.0917.275.0917l.0184-.0183-.0183-.0642a.275.275 0 0 0-.1834-.0917Zm.5043.2017-.0092.055c.0275.0276.0917.0367.1284.0276v-.0367l-.0459-.0367Zm.55.1192-.055.0184-.0183.0183.0917.0733.0367-.0183v-.0367l-.0184-.0275Zm9.4436.3851h-.0734l-.0183.0367v.0366h.0367a.2017.2017 0 0 0 .055-.0733Zm-7.9399.0733-.8985.2568c.3209.1833.6601.2934.9535.0917l.0458-.0917c.0184-.11-.0366-.1742-.1008-.2568Zm60.5027.3393c-.1376.0091-.2109.1192-.3576.1192-.3392.0091-.5776-.1834-.8985.0641-.275.211-.2476.431-.3026.706l3.7591 4.4009.0917-.0092c.0917-.1192.1558-.3117.275-.4126.0734-.0642.1559-.0642.2384-.1742a4.1286 4.1286 0 0 1-.0275-.9993c-.2292-.275-.1834-.4218-.33-.6143-.22-.2934-.5868-.33-.7977-.7335-.1467-.2934-.0917-.596-.165-.8985-.11-.44-.5318-.4126-.7152-.6601-.1834-.2476-.3117-.6693-.6051-.7702a.3667.3667 0 0 0-.165-.0275Zm-89.0258 1.1185c-.0183.0734.0917.2109.1559.2476h.055c-.0092-.1192-.055-.1467-.11-.2292Zm87.7147.5868v.055l.0458.0367.0367-.0183v-.0642Zm-87.0179.1284c.11.165.275.33.5776.5042.1467.0825.321.11.5043.1284Zm-.7885.1192c.1834.5226.4951 1.0543.6602 1.1552l.0916-.0275a.3667.3667 0 0 0-.0183-.2384Zm88.604.2933v.0459l.0275.0275h.0459l.0183-.0367c-.0091-.0275-.0733-.0367-.0917-.0367Zm-86.0276.4035-.0459.0458.1376.0917.0366-.0367-.0367-.0733Zm30.9894.0733c-.0367 0-.0734.0092-.1009.0275.0275.0183.11.0275.1375.0092Zm.2017.0367.0275.0917a.3992.3992 0 0 0 .1467.0917l.0183-.0276c-.0458-.11-.0917-.1283-.1834-.1558Zm55.3683.1283.3484.6602c0-.1926-.0275-.4034-.1008-.4951-.055-.0642-.156-.11-.2476-.165Zm.3484.6602-.0092.3392c.1009.2017.3301.3209.4585.5134Zm-55.1666-.376-.0184.0276.0184.0366c.0458.0184.11.0092.1467 0-.0367-.0366-.0917-.0458-.1467-.0641Zm3.649.046-.0275.0274.0275.055c.0184.0092.0459.0184.0734.0092v-.0275l-.0275-.0459Zm-1.9712.064a.2916.2916 0 0 0-.165.0551c.0641.0458.1375.0367.1833-.0275Zm-1.4303 0-.0183.0551.0183.055c.055.0367.1376.0458.2017.0458 0-.0275-.1833-.1375-.2017-.1558Zm1.687.046.0184.0458c.0825 0 .1558.0458.2383.0091l.0184-.0366h-.0459l-.0641.0183Zm-.9168.1925h-.0092a.2769.2769 0 0 0-.0917.055l.0184.0183c.0366 0 .0641-.0183.0917-.0275.0183-.0092.0091-.0367 0-.0458Zm-34.1892.2659c-.0459.0366-.0917.0916-.1284.1467.1009.3208 2.0721 2.1362 2.4388 2.3838.2018.1375.4401.22.651.3392l-2.7505-2.7322v-.0642a.9178.9178 0 0 0-.211-.0734Zm38.2875.0733-.0275.0917.0275.0183h.0458l.0184-.0275-.0184-.055Zm-36.1604.055-.0184.0458.0092.055.0367.0184c.0183-.0183.0366-.0458.0366-.0734l-.0183-.0275Zm36.4446.1467-.0458.0734.0916.0733.0092-.0367c0-.0275-.0275-.0917-.055-.11Zm-35.9679.431c.22.55.3668 1.1276.7518 1.586l.0917.11Zm37.1873.4217-.0642.0275c0 .055.0642.1558.11.1834l.0092-.0367c-.0183-.055-.0183-.1376-.055-.1834Zm49.5372.0917c.0092.0366.0275.0641.0642.0916h.0642l.0183-.0458a.2879.2879 0 0 0-.1467-.055Zm-46.044.1375v.1192c0 .2934.1284.6234.2109.9168.0641.2109.165.4126.275.6143Zm-30.2834 1.1919-.0275.0458.0183.055.0825-.055-.0275-.0367Zm27.0194.1008c-.0275.0917-.0183.165-.0275.2476-.0642.3025-.275.5318-.2475.871.0183.165.1375.3392.1833.495.0642.1743.055.376.11.5594.0367.1467.1193.2475.1926.3575Zm-26.4052.2017-.0091.055.0183.0092.0275-.0183-.0091-.0367Zm-9.911.2292-.0459.055.0642.0734c.0458.0183.1192 0 .1558-.0183-.0183-.055-.1283-.0642-.1833-.11Zm10.122.101a.2934.2934 0 0 0-.0184.11l-.0642.055c-.0642 0-.1192 0-.1834.0183v.0367c.1192.0458.2293.0275.3393-.0642 0-.0459-.0459-.1192-.0734-.1559Zm-.9903.1283-.0183.0275v.0367l.0275.0275h.0367l-.0184-.0734Zm31.0994.3117-.0366.0367c0 .165.0275.2292-.0275.4034l.0458.0367c.0825-.22.0734-.211.0459-.431Zm-.3575.7426a.1742.1742 0 0 0-.0734.11l.055.0184c.0092-.0275.0734-.0917.0642-.1192Zm-.1375.2476-.0459.0275a.2567.2567 0 0 0-.055.1467h.0367l.0642-.1284Zm-2.6497 1.0727v.0458c.0458.0459.11.0734.1742.1009l.055-.0183v-.0459Zm2.5121.3026h-.0367c-.0366.0733-.0091.1742.0276.2292l.0458-.0275a.4933.4933 0 0 0-.0367-.2017Zm-1.1919.66.0275.0643c.0642.0275.11.0733.1834.0916v-.0366l-.0275-.055c-.055-.0367-.11-.0459-.1834-.0642Zm1.082.3668c0 .0642-.046.2109-.0918.2476h-.1192a.385.385 0 0 1-.1375-.1559l-.0458.0184a.4584.4584 0 0 0 .1558.3667c.0825.0183.2292-.0092.2934-.0642.0367-.11.055-.2567.0459-.3759Zm4.7767 6.638c0 .0825.055.1834.1375.22l.0458-.0183v-.0458c-.0366-.0459-.1191-.0917-.1283-.1467Zm1.036.2109c.1559.0641.2842.1742.4584.22l.1559.0458c.2292.0276.5684.0184.8068 0 .11-.0183.22-.0733.33-.0916Zm1.8612.1558-.11.0184.4676.0458a1.1369 1.1369 0 0 0-.3668-.0642Zm.9719.2292-.0092.055.0183.0276a.1834.1834 0 0 0 .0917.0091c.1009.055.1375.2017.2017.2934.0825-.1559-.1467-.385-.3025-.385Zm-3.5116.2292c.1834.2751.3485.5593.5868.761.275.2292.6327.1834.9169.3393.4584.2567.4676.5867.7885.9352l.3209-.165Zm-11.763.9903.0183.0458.0458.0275.0367-.0092a.0963.0963 0 0 0 0-.0641Zm15.1645.55c0 .0276.0092.0642.0276.0917h.0458l.0275-.0366-.0275-.0275a.2228.2228 0 0 1-.0734-.0367Zm.1467.7335.0092.1376c.0734.3392.4584.6968.871 1.0727Zm.8802 1.2103 1.1277 1.5311c.0275-.5134-.5776-1.036-1.1277-1.5311Zm1.1277 1.5311v.0458c.1467.1834.3026.3576.431.5502Zm-2.8697-2.7047c-.055.0275-.2292.33-.2017.4584.0275.11.1375.2476.2017.3484.2109.3393.2292.8435.4951 1.1186l.1375.11Zm.6418 2.0354.4034 1.3294c.0183-.3667.055-.816 0-1.0085-.0458-.11-.2475-.22-.4126-.3209Zm.4034 1.3294v.2934c0 .4676.2109.5685.3484.8068Zm2.2646.6602c0 .0275-.0642.0183-.055.055.0458.0733.0917.165.0734.2659l.0275.0275.0366-.0275.0184-.0459c-.0275-.0917-.055-.1834-.1009-.275Zm-1.9254.44.1192.3484a1.3689 1.3689 0 0 0-.0458-.2108.7316.7316 0 0 0-.0642-.1376Zm1.2928 1.0453-.0183.0091c-.1376.0917-.2568.2109-.4218.2476a.9719.9719 0 0 1-.3484-.2292l-.055-.0092-.0183.0367c.0091.055.1192.11.1558.1375.4401.275.4034-.0275.7152-.1467.0183-.0092.0183-.0458 0-.0458Zm14.1653.2567h-.0367c-.0367.0366-.0458.055-.0734.11l.0184.1284c.0367-.0184.0825-.0367.1008-.0734v-.165Zm-.4493 2.9339-.2292.0091c-.055 0 0 .0826.0183.0917.2934-.0825.5685.0275.6785.3026-.0183.11-.1742.2567-.2475.3392 0 .0184.0091.0459.0366.0459.22-.055.22-.2476.3118-.4218.0183-.2842-.3026-.3484-.5685-.3576Zm-.981.5684-5.1435 1.3845c.1834.0366.3484.0916.541.1466.1833.0642.4033.0276.5959.0367.0916 0 .1925.0367.2842.0367.1834 0 .596-.3667.7243-.5134.0734-.0734.0917-.1834.1559-.2568.2933-.1375.8343.5502 1.311.3668.321-.1192 1.3295-.9169 1.5312-1.192Zm-5.1435 1.3845a1.631 1.631 0 0 0-.4034-.0276c-.2568 0-.4493.1834-.6418.3118Zm6.0328-.6235-.0275.0183a.3392.3392 0 0 0-.055.2476c.0275.0183.055.0183.0917.0183 0-.0917.0183-.165.0367-.2475l-.0092-.0275Zm-.0367.7518h-.0366c-.0459.0367-.055.055-.0734.11v.1284c.0459-.0183.0917-.0367.11-.0734Zm-7.6464.6876c-.0917.0092-.211.2568-.2017.3393.0183.1192.0733.2109.0916.3209.0642.2567.0642.7976.3026.9535-.11-.431-.3026-.8068-.2842-1.2744l.1283-.3117Zm7.2339.3668c-.1375.0917-.2934.1742-.4034.2567-.1467.1192-.2476.2934-.3851.4217Zm-.7885.6784-.0642.055a.7335.7335 0 0 0 .0642-.055Zm-.0642.3851-.7151 1.4487c.0825-.0642.0917-.165.1833-.2384.266-.2567.6052-.3668.7519-.7518 0-.1926-.22-.2568-.22-.4585Zm-5.3819.7427-.0458.0183v.055c.2108.055.4126.1192.6418.1192v-.0367c-.0459-.0458-.4951-.1283-.596-.1558Zm1.1736.5684-.055.0184-.0092.0366c.0734.1559.2476.2384.4126.2934l.0183-.0642c-.0825-.0275-.1742-.0458-.2475-.0916a.486.486 0 0 0-.1192-.1834Zm.4676.385-.0184.0276v.055l.055.055c.1192 0 .9902 0 1.036.0184.0092.0733 0 .1558.0184.22l.1375.11c.1192 0 .5502-.0458.6602 0 .0642.0184.1192.0734.2017.0642.2292-.0183.2384-.0367.4584.0734l.0825-.0184c.0917-.1283.0917-.1834.0917-.3392l-.1009.1375c-.275.0825-1.0818 0-1.3752-.0642a.7793.7793 0 0 1-.1559-.275l-.1467.055c-.1283-.0184-.8893-.0825-.9443-.1192Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".9774" strokeLinecap="round"
                                        strokeMiterlimit="3.999" strokeDasharray="none" strokeOpacity={1}
                                        data-originalstrokewidth="0.9774" pointerEvents="visible" style={{
                                            fill: 'none', stroke: 'none'
                                            , pointerEvents: 'visible', display: 'none'
                                        }} />
                                </g>
                                <g id="g5194"><text id="Puerto_Rico_label" x="699.2264" y="596.7478" fontSize="10.342"
                                    strokeWidth=".8618" style={{ display: 'none' }}>
                                    <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="Puerto_Rico_tspan"
                                        x="699.2264" y="596.7478" fontStyle="normal" fontWeight={400} fontSize="8.6183"
                                        fontFamily="Arial" textAnchor="middle" fill="#000000" strokeWidth=".8618">Puerto Rico
                                    </tspan>
                                </text>
                                    <path id="Puerto_Rico" strokeMiterlimit="3.999"
                                        d="m736.2799 624.3119-.22.1192-.8069-.0367-1.1369.6784-.275-.2475-1.0086.3667-2.3838.596-.4584.2384-.6418-.1834-.9352.1284-.8893-.11-.486-.8894 1.2287-.0734.5959-.2383 1.247-.8619 2.4295-.4217.3851.0458 1.0636.3484 1.5953.0275.3942.1467Zm.4584-5.9412.3667.5501h-.4034l.211.2109-.5777-.0367-.2567-.3942h-.2109l.3484.7885-.11.3117-.431-.6418-1.2835-1.1644v-.1192h.761l.8618.1467Zm-53.2687-4.9326 3.1814.6143 3.1448-.4585.4309.055 1.1369.3668.44.0367 1.192-.275 1.7053-.1835.8068.0917.8069.275.495-.0916 1.9438-.0184 1.2102.3393 2.5672-.5501 2.3838.6784 1.3753-.4309 1.6136.486.3392-.2751.4034.0734.3393.44.275.1284.5135-.4951.3025.0917-.0917.4126.5777.3025.3025.706.4584.0183 1.0086-.3209v-.2292l-.5135-.055-.55-.275-.8252-.8069 1.9987.596 1.3294.275.4401-.1833.275-.4218.6785.1375 1.3936.3668.4584-.321.3668.0643.385.275.981.2017.5319.275.55.5777.3393-.1834.22-.3117.22.22-.275.431.7335-.3118.5318.7335.5134.275.4034-.3025.8252.6418 1.0544.1192 1.0085-.8068.275.275-.275 1.577-.0367 1.3294.1284.3667-.1192.3943.4767.33.4035-.2016-.0917.2934.4767.715-.3117.2293-.0367.275-.275.0276-.3026-.4585h-.3392l-.0917.3393.2934.3942-.275.2567-.3668-.055-.5226-.2567-1.0727.4584-.596.165-.4859.2293-.5226.5317-1.0452 1.687-.0734.8435-.4034.5501-.8618.2751-.1467.1834.321.9352-.5869.55-1.1277.7335-1.5586.5501h-.6968l-1.3203-.1833-.3667.0917-.8894.3667-1.1369.0183-.6234.165-1.7604.972-1.0085.0641-.2384.165-.1833-.4309.3942-.2475-.4217-.3943-.5868.5501-.3484.0917-1.5587-.2475-.4309-.5685-.6601-.2475-.4951.0367-.706.1833-.8618.6051-.6235-.0641-.596-.4585-.5042-.55-.5226-.3393-.9902.1834-.761.2567-.9902.0642-.6418.385-.3484.0734-.4767-.2384-.431.2292-.22-.3484-.5226-.0458-1.2469.1833-1.146-.3942h-1.2561l.0183-.431-.275-.1283-.4035.0917-.3667.2384v.2384h.4126l-.3392.4767-.596.33-1.3294.3118-.9444-.0183-.9627.0458-.1833.6418-.5501-.055-.4401-.2934-.6968-.7151-1.302-.1376-.7334.0184-.431-.1375-.4217.3667-.486.275-.44.0917-.596-.055-1.311-7.1514.44-.4584.165-.3667-.5959-.6693-.5868-1.7054-.6418-3.484.7702-.4217.7335-.596.0458-.706-.3392-.55-.0459-.8069.5502-.7335 1.5036-.4584 1.6136.0367Z"
                                        fill="none" fillOpacity={1} stroke="none" strokeWidth=".7335" strokeDasharray="none"
                                        strokeOpacity={1} data-originalstrokewidth="0.7335" pointerEvents="visible" style={{
                                            fill: 'none'
                                            , stroke: 'none', pointerEvents: 'visible', display: 'none'
                                        }} />
                                </g>
                                <g id="g5162">
                                    <path id="MD" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m797.774 281.7129-5.3606 1.0577-4.5802.1027-1.643-6.1616-1.715-8.1436-2.2799-5.4942-1.1501-3.9023-6.6752 1.4377-13.268 2.5057-33.3755 6.7162 1.027 4.4466.8523 5.032.2875-.2772 1.8793-2.1566 2.0128-2.3209 2.1566-.5545 1.3042-1.294 1.5918-2.29 1.1501.5648 2.5982-.3081 2.3003-1.8485 1.7869-1.294 1.6431-.4313 1.4685 1.0064 2.5982 1.294 1.7458 1.5712 1.068 1.3556 3.6764 1.5096v2.5673l4.8883 1.1605 1.0269.4826 1.2631-1.7971 2.5674 1.7458-1.1296 2.2079-.688 3.543-1.5816 2.3003v1.8485l.5751 1.5917 4.5185 1.2015 3.8305-.0513 2.7522.8626 1.869.308.8627-1.8792-1.294-1.869v-1.5815l-2.1565-1.8485-1.8793-4.8985 1.1501-4.7445-.1437-1.8485-1.1502-1.1604s1.3042-1.4377 1.3042-2.0025c0-.5751.4416-1.869.4416-1.869l1.7252-1.1502 1.7253-1.4377.4313.8626-1.294 1.4377-1.1501 3.3067.2875.9962 1.5815.308.4313 4.878-1.869.8626.2876 3.1528.4313-.1438 1.0064-1.7253 1.4377 1.5815-1.4377 1.1296-.2876 3.0295 2.3106 3.0192 3.4505.4108 1.4378-.7189 2.8754 3.7278 1.2323.4724 5.9152-2.4955 1.7766-3.5737-.38-4.3748Zm-14.2334 8.0204 1.0064 2.2182.1438 1.5815 1.027 1.643s.7804-.7804.7804-1.068c0-.2875-.647-2.7316-.647-2.7316l-.6572-2.0744-1.6431.4313Z"
                                        className="state md" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(49)}
                                        style={{ fill: selected.includes(49) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} />
                                    <path d="m767.2842 267.7568 42.8233 29.7401-42.8233-29.7504Z" id="MD_line" stroke="#000"
                                        strokeOpacity={1} style={{ strokeWidth: '1.02694' }} /><text id="MD_label" x="824.4251"
                                            y="304.2234" fontSize="10.3135" strokeWidth=".8595">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="MD_tspan" x="824.4251"
                                            y="304.2234" fontStyle="normal" fontWeight={400} fontSize="12.8912" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".8595">MD</tspan>
                                    </text>
                                </g>
                                <g id="g5150">
                                    <path id="DE" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m785.1529 260.2499.3286-1.9102.3081-1.5095-1.4377.3491-1.4377.4108-1.9512 1.5712 1.5199 4.4877 2.0128 5.032 1.8793 8.6263 1.4377 5.5968 4.4672-.1437 5.4735-1.0475-2.023-6.5724-.8627.4313-3.1835-2.1566-1.5712-4.159-1.715-3.163-2.8035-2.5674-.7702-1.8485.3286-1.4377Z"
                                        className="state de" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(50)}
                                        style={{ fill: selected.includes(50) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} />
                                    <path d="m816.7826 272.8504-23.979 4.1694 23.979-4.1797Z" id="DE_line" stroke="#000"
                                        strokeOpacity={1} style={{ strokeWidth: '1.02694' }} /><text id="DE_label" x="826.8025"
                                            y="274.7995" fontSize="10.4861" strokeWidth=".8739">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="DE_tspan" x="826.8025"
                                            y="274.7995" fontStyle="normal" fontWeight={400} fontSize="13.1068" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".8739">DE</tspan>
                                    </text>
                                </g>
                                <g id="g5144">
                                    <path id="NJ" fill="#cc3333" stroke="#000" strokeLinecap="round"
                                        d="m788.7575 224.8513-2.054 2.4338v2.7317l-1.7457 2.742-.1438 1.4376 1.1605 1.1296-.1438 2.1566-2.023 1.027.7188 2.4338.1437 1.0064 2.4647.2875.8524 2.3004 3.1835 2.1566 2.1565 1.4377v.7188l-2.67 2.3928-1.4377 2.0128-1.294 2.4441-2.023 1.1605-.4108 1.4377-.2054 1.068-.5545 2.3106.9755 1.9923 2.896 2.5879 4.3132 2.0127 3.5942.5751.154 1.294-.7188.8626.2876 2.4441h.7188l1.869-2.1566.719-4.313 2.4646-3.5944 2.7214-5.7508 1.0269-4.878-.5854-1.0064-.154-8.3387-1.4377-3.009-1.0064.7189-2.4441.2875-.4313-.4313 1.0064-.8626 1.869-1.7253.0616-.9756-.3492-3.0602.5135-2.4442-.1027-1.7457-2.5057-1.561-4.539-1.0475-3.697-1.2323-3.1836-1.4582Z"
                                        className="state nj" fillOpacity={1} strokeWidth="0.8216" strokeMiterlimit="3.999"
                                        strokeDasharray="none" strokeOpacity={1} data-originalstrokewidth="0.8216"
                                        onClick={() => handleClick(51)}
                                        style={{ fill: selected.includes(51) ? '#40FF62' : '#D6D6D6', cursor: 'pointer', stroke: 'white', strokeWidth: '0.8216' }} />
                                    <path d="m799.3657 247.6288 24.6877.2054-24.6774-.2054Z" id="NJ_line" stroke="#000"
                                        strokeOpacity={1} style={{ strokeWidth: '1.02694' }} /><text id="NJ_label" x="833.6409"
                                            y="251.1307" fontSize="9.8607" strokeWidth=".8216">
                                        <tspan style={{ textAlign: 'center', fill: 'rgb(0, 0, 0)' }} dy={0} id="NJ_tspan" x="833.6409"
                                            y="251.1307" fontStyle="normal" fontWeight={400} fontSize="12.3263" fontFamily="Arial"
                                            textAnchor="middle" fill="#000000" strokeWidth=".8216">NJ</tspan>
                                    </text>
                                </g>
                                <rect id="selection-rectangle" fill="yellow" stroke="black" strokeWidth="0.3" opacity="0.5" />
                                <ellipse id="selection-ellipse" fill="yellow" stroke="black" strokeWidth="0.3" opacity="0.5" />
                                <polygon id="selection-polygon" fill="yellow" stroke="black" strokeWidth="0.3" opacity="0.5" />
                                <polyline id="selection-polyline" fill="yellow" stroke="black" strokeWidth="0.3" opacity="0.5" />
                            </svg></g>

                        </svg>



                    </div>
                </div>
            </div>
            <div className='text-center pt-3 pb-5'>
                <p onClick={handleClear} className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                    Clear
                </p>
                <Link to="/success">
                    <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Register Now
                    </p>
                </Link>
            </div>
        </div>

    )
}
