import './App.css';

import React, { useState} from 'react';

export default function ScreenRec() {
    const [vid_src, setSrc] = useState('')
    setSrc('')
    return (
        <div>
            <nav>
                <span className="nav-item">
                    <h3 className="logo-p">HelpMeOut</h3>
                </span>
                <span className="nav-item mid-span">
                    <p className="mid-span-p">Features</p>
                    <p className="mid-span-p">How it works</p>
                </span>
                <span className="nav-item">
                    <p className="get-started">Get Started</p>
                </span>
            </nav>


            <div className="wrapper">

                <div className="sect1">
                    <h1>Your video is ready!</h1>

                    <div className="name-binder">
                        <p className="name-binder-p">Name</p>
                        <div className="name-untitled">
                            <h3 className="h-3">Untitled_Video_20232509</h3>

                            <svg className="name-untitled-svg" xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                <path d="M16 5l3 3" />
                            </svg>
                        </div>
                    </div>

                    <div className="enter-email">
                        <input type="text" placeholder="enter email of receiver" />
                        <button className="send-to-email">Send</button>
                    </div>

                    <div className="vid-url">
                        <div className="video-url">https://screenrec.com/recording.mp4</div>
                        <div className="vid-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copy" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="8" y="8" width="12" height="12" rx="2" />
                                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                            </svg>
                            <span>
                                Copy
                            </span>
                        </div>
                    </div>

                    <div className="share-your-binder">
                        <p className="share-your-p">Share your video</p>
                        <div className="share-your">
                            <div className="share1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="blue" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <p className="share1-p">facebook</p>
                            </div>
                            <div className="share1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="rgb(4, 214, 126)"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                    <path
                                        d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                </svg>
                                <p className="share1-p">Whatsapp</p>
                            </div>
                            <div className="share1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram"
                                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="rgb(12, 125, 224)"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                </svg>
                                <p className="share1-p">Telegram</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sect2">
                    <video src={vid_src} className="recorded-video" controls></video>
                    <div className="tran-bind">
                        <h3 className="tran-head">Transcript</h3>

                        <div className="tran">

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div>

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div>

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div>

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div>

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div>

                            <div className="tran-item">
                                <div className="tran1">0.01</div>
                                <div className="tran2">
                                    <p>First step. Open Facebook on your desktop or moblie device and locate
                                        "Marketplace" in the left-hand menu or at the top of the
                                    </p>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </div >

            <div className="on-footer">
                <p className="on-footer-p">To ensure the availability and privacy of your video, we recommend downloading it to
                    your device</p>

                <button className="download-rec">Download video</button>
            </div>
        </div >
    );
}
