import "./main-slider.css";
import CountUp from "react-countup";

const MainSlider = () => {
    return (
        <div className='main-section py-5'>
            <div className="main-section__wrapper container">

                <div className="main-section__title mb-3">
                    <h2 className="h3 text-center">ما به هر قیمتی دوره آموزشی تولید نمی کنیم !</h2>
                </div>

                <div className="main-section__subtitle mb-5">
                    <h3 className="h5 text-center">با آکادمی <span className='fw-bold main-section__subtitle__bold'>های لرن</span>، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن.</h3>
                </div>

                <div className="main-section__content">
                    <div className="main-section__content__wrapper d-flex justify-content-between">

                        <div className="main-section__content__box">
                            <div className="main-section__content__icon my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="80" viewBox="0 0 512 512" width="80"><g><path d="m403.802 334.499-30.049-8.823-65.376-42.701v-9.784c18.928-14.277 31.926-36.1 34.342-61.115 9.493-1.528 16.766-9.777 16.766-19.693v-26.905c0-.104-.011-.206-.016-.31v-34.082c3.782-2.708 6.182-7.119 6.182-12.067v-31.19l45.117-7.685c7.415-1.263 12.747-7.152 13.271-14.655.522-7.503-3.941-14.075-11.108-16.354l-152.097-48.378c-3.174-1.01-6.526-1.009-9.698-.001l-152.099 48.379c-7.167 2.279-11.631 8.851-11.108 16.353.332 4.767 2.61 8.877 6.126 11.569v40.787h-.372c-8.565 0-15.533 6.968-15.533 15.533v20.246l-10.027 58.852c-1.733 10.179 6.107 19.496 16.457 19.496h33.949c10.327 0 18.194-9.295 16.457-19.497l-10.027-58.851v-20.246c0-8.565-6.968-15.533-15.533-15.533h-.371v-36.363l37.294 6.352v31.186c0 4.927 2.389 9.331 6.153 12.043l.014 34.419v26.902c0 9.917 7.273 18.165 16.766 19.693 2.415 25.001 15.399 46.814 34.309 61.092v9.83l-65.362 42.693-30.025 8.813c-32.129 9.43-54.815 38.927-54.815 73.215v22.352c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-22.352c0-27.024 18.109-51.213 44.04-58.823l27.976-8.212 111.766 66.413c2.269 1.348 5.271 1.42 7.662 0l111.773-66.417 27.973 8.212c25.927 7.612 44.036 31.8 44.036 58.822v72.438c0 9.291-7.559 16.85-16.85 16.85h-33.057v-32.328c0-4.142-3.357-7.5-7.5-7.5-4.142 0-7.5 3.357-7.5 7.5v32.328h-245.448v-32.328c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v32.328h-33.023c-9.291 0-16.85-7.559-16.85-16.85v-15.022c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v15.021c0 17.562 14.287 31.849 31.849 31.849h341.527c17.562 0 31.849-14.287 31.849-31.849v-72.438c0-33.48-21.912-63.555-54.81-73.214zm-285.274-117.528h-33.948c-1.049 0-1.849-.937-1.671-1.978l9.07-53.236h19.15l9.07 53.235c.177 1.039-.617 1.979-1.671 1.979zm-8.569-83.594v13.381h-16.811v-13.381c0-.295.239-.534.534-.534h15.742c.296-.001.535.239.535.534zm119.218 239.794 2.985 4.588-76.569-45.497 48.601-31.745c2.204 25.86 10.728 50.745 24.983 72.654zm-.052-32.375c17.653 2.508 36.087 2.51 53.75 0-3.413 8.398-7.619 16.502-12.624 24.196l-14.251 21.904-14.251-21.904c-5.005-7.694-9.211-15.798-12.624-24.196zm53.698 32.375c14.255-21.909 22.779-46.794 24.982-72.654l48.601 31.744-76.568 45.498zm43.871-239.292h17.776v24.098h-8.823c-4.937 0-8.954-4.016-8.954-8.953v-15.145zm-223.111-70.45 152.101-48.38c.195-.062.405-.063.603.001l152.1 48.379c.314.1.745.236.69 1.017-.055.78-.5.855-.826.911l-50.288 8.565-18.88-2.335c-4.108-.509-7.854 2.413-8.363 6.523-.508 4.111 2.413 7.855 6.523 8.363l13.41 1.659v30.748l-189.305-.007v-30.742l77.607-9.603c11.304-1.397 22.764-1.397 34.06 0l29.373 3.633c4.11.509 7.855-2.412 8.364-6.522.509-4.111-2.412-7.855-6.522-8.364l-29.373-3.633c-12.517-1.549-25.217-1.549-37.743 0l-83.094 10.282-50.303-8.567c-.326-.056-.771-.131-.826-.911-.054-.781.377-.918.692-1.017zm63.928 94.548-.01-24.098h17.805v15.146c0 4.936-4.016 8.953-8.954 8.953h-8.841zm16.507 50.244c-.386-6.107-5.462-10.891-11.555-10.891-2.729 0-4.949-2.22-4.949-4.948v-19.405h8.838c13.207 0 23.953-10.745 23.953-23.952v-15.146h111.389v15.146c0 13.207 10.746 23.952 23.953 23.952h8.838v19.405c0 2.728-2.22 4.948-4.949 4.948-6.093 0-11.169 4.784-11.555 10.892-2.389 37.869-34.007 67.534-71.982 67.534s-69.592-29.665-71.981-67.535zm71.982 82.534c13.339 0 26.017-3.05 37.378-8.473v4.753c0 12.823-1.73 25.472-5.061 37.672-20.382 3.886-43.425 4.043-64.634 0-3.331-12.199-5.061-24.848-5.061-37.672 0-.159-.022-.314-.032-.471-.002-.031.001-.062-.001-.093v-4.204c11.369 5.432 24.059 8.488 37.411 8.488z"></path></g></svg>
                            </div>
                            <div className="main-section__content__count">
                                <CountUp end={31751} />
                            </div>
                            <div className="main-section__content__title text-center">
                                کاربر توی های لرن ثبت نام کردن
                            </div>
                        </div>

                        <div className="main-section__content__box">
                            <div className="main-section__content__icon my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve" width={80} height={80}>
                                    <g>
                                        <g>
                                            <path d="M460.8,200.748V51.2c-0.015-14.132-11.468-25.585-25.6-25.6h-8.533c-0.015-14.132-11.468-25.585-25.6-25.6H256    c-9.841,0.032-19.182,4.337-25.6,11.796C223.982,4.337,214.641,0.032,204.8,0H59.733c-14.132,0.015-25.585,11.468-25.6,25.6H25.6    C11.468,25.615,0.015,37.068,0,51.2v315.733c0.015,14.132,11.468,25.585,25.6,25.6h281.6V435.2    c0.049,42.395,34.405,76.751,76.8,76.8h51.2c42.395-0.049,76.751-34.405,76.8-76.8V273.067    C511.943,240.559,491.442,211.602,460.8,200.748z M426.667,42.667h8.533c4.71,0.006,8.527,3.823,8.533,8.533v145.57    c-2.833-0.326-5.682-0.494-8.533-0.503h-8.533V42.667z M85.333,17.067h51.2v112.208l-18.938-23.671    c-1.618-2.025-4.07-3.204-6.662-3.204c-2.592,0-5.044,1.179-6.662,3.204l-18.938,23.671V17.067z M51.2,25.6    c0.006-4.71,3.823-8.527,8.533-8.533h8.533V153.6c-0.002,3.625,2.287,6.854,5.708,8.054c3.42,1.2,7.225,0.107,9.488-2.725    l27.471-34.337l27.471,34.337c1.618,2.026,4.07,3.205,6.662,3.204c2.264,0.002,4.435-0.897,6.036-2.497    c1.601-1.601,2.499-3.772,2.497-6.036V17.067h51.2c9.422,0.009,17.057,7.645,17.067,17.067v278.34    c-5.344-3.407-11.542-5.235-17.879-5.274H51.2V25.6z M51.2,324.267h152.788c9.391,0.329,17.019,7.693,17.678,17.067H51.2V324.267z     M307.2,375.467H25.6c-4.71-0.006-8.527-3.823-8.533-8.533V51.2c0.006-4.71,3.823-8.527,8.533-8.533h8.533v307.2    c0,4.713,3.82,8.533,8.533,8.533H307.2V375.467z M307.2,341.333h-68.066c0.671-9.384,8.317-16.748,17.72-17.067H307.2V341.333z     M307.2,307.2h-50.346c-6.352,0.038-12.565,1.871-17.921,5.286V34.133c0.009-9.422,7.645-17.057,17.067-17.067h145.067    c4.71,0.006,8.527,3.823,8.533,8.533v170.667H384c-42.395,0.049-76.751,34.405-76.8,76.8V307.2z M401.067,213.333v110.933h-76.8    v-51.2c0.037-32.974,26.759-59.696,59.733-59.733H401.067z M494.933,435.2c-0.037,32.974-26.759,59.696-59.733,59.733H384    c-32.974-0.037-59.696-26.759-59.733-59.733v-93.867h170.667V435.2z M494.933,324.267h-76.8V213.333H435.2    c32.974,0.037,59.696,26.759,59.733,59.733V324.267z" />
                                        </g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                    <g>
                                    </g>
                                </svg>
                            </div>
                            <div className="main-section__content__count">
                                <CountUp end={45} />
                            </div>
                            <div className="main-section__content__title text-center">
                                دوره آموزشی داریم
                            </div>
                        </div>

                        <div className="main-section__content__box">
                            <div className="main-section__content__icon my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.992 511.992" width="80" height="80">
                                    <g id="XMLID_806_">
                                        <g id="XMLID_386_">
                                            <path id="XMLID_389_" d="M511.005,279.646c-4.597-46.238-25.254-89.829-58.168-122.744    c-28.128-28.127-62.556-46.202-98.782-54.239V77.255c14.796-3.681,25.794-17.074,25.794-32.993c0-18.748-15.252-34-34-34h-72    c-18.748,0-34,15.252-34,34c0,15.918,10.998,29.311,25.793,32.993v25.479c-36.115,8.071-70.429,26.121-98.477,54.169    c-6.138,6.138-11.798,12.577-16.979,19.269c-0.251-0.019-0.502-0.038-0.758-0.038H78.167c-5.522,0-10,4.477-10,10s4.478,10,10,10    h58.412c-7.332,12.275-13.244,25.166-17.744,38.436H10c-5.522,0-10,4.477-10,10s4.478,10,10,10h103.184    c-2.882,12.651-4.536,25.526-4.963,38.437H64c-5.522,0-10,4.477-10,10s4.478,10,10,10h44.54    c0.844,12.944,2.925,25.82,6.244,38.437H50c-5.522,0-10,4.477-10,10s4.478,10,10,10h71.166    c9.81,25.951,25.141,50.274,45.999,71.132c32.946,32.946,76.582,53.608,122.868,58.181c6.606,0.652,13.217,0.975,19.819,0.975    c39.022,0,77.548-11.293,110.238-32.581c4.628-3.014,5.937-9.209,2.923-13.837s-9.209-5.937-13.837-2.923    c-71.557,46.597-167.39,36.522-227.869-23.957c-70.962-70.962-70.962-186.425,0-257.388c70.961-70.961,186.424-70.961,257.387,0    c60.399,60.4,70.529,156.151,24.086,227.673c-3.008,4.632-1.691,10.826,2.94,13.833c4.634,3.008,10.826,1.691,13.833-2.941    C504.367,371.396,515.537,325.241,511.005,279.646z M259.849,44.263c0-7.72,6.28-14,14-14h72c7.72,0,14,6.28,14,14s-6.28,14-14,14    h-1.794h-68.413h-1.793C266.129,58.263,259.849,51.982,259.849,44.263z M285.642,99.296V78.263h48.413v20.997    C317.979,97.348,301.715,97.36,285.642,99.296z"></path>
                                            <path id="XMLID_391_" d="M445.77,425.5c-2.64,0-5.21,1.07-7.069,2.93c-1.87,1.86-2.931,4.44-2.931,7.07    c0,2.63,1.061,5.21,2.931,7.07c1.859,1.87,4.43,2.93,7.069,2.93c2.63,0,5.2-1.06,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07    c0-2.63-1.069-5.21-2.93-7.07C450.97,426.57,448.399,425.5,445.77,425.5z"></path>
                                            <path id="XMLID_394_" d="M310.001,144.609c-85.538,0-155.129,69.59-155.129,155.129s69.591,155.129,155.129,155.129    s155.129-69.59,155.129-155.129S395.539,144.609,310.001,144.609z M310.001,434.867c-74.511,0-135.129-60.619-135.129-135.129    s60.618-135.129,135.129-135.129S445.13,225.228,445.13,299.738S384.512,434.867,310.001,434.867z"></path>
                                            <path id="XMLID_397_" d="M373.257,222.34l-49.53,49.529c-4.142-2.048-8.801-3.205-13.726-3.205c-4.926,0-9.584,1.157-13.726,3.205    l-22.167-22.167c-3.906-3.905-10.236-3.905-14.143,0c-3.905,3.905-3.905,10.237,0,14.142l22.167,22.167    c-2.049,4.142-3.205,8.801-3.205,13.726c0,17.134,13.939,31.074,31.074,31.074s31.074-13.94,31.074-31.074    c0-4.925-1.157-9.584-3.205-13.726l48.076-48.076v0l1.453-1.453c3.905-3.905,3.905-10.237,0-14.142    S377.164,218.435,373.257,222.34z M310.001,310.812c-6.106,0-11.074-4.968-11.074-11.074s4.968-11.074,11.074-11.074    s11.074,4.968,11.074,11.074S316.107,310.812,310.001,310.812z"></path>
                                            <path id="XMLID_398_" d="M416.92,289.86h-9.265c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.265c5.522,0,10-4.477,10-10    S422.442,289.86,416.92,289.86z"></path>
                                            <path id="XMLID_399_" d="M212.346,289.616h-9.264c-5.522,0-10,4.477-10,10s4.478,10,10,10h9.264c5.522,0,10-4.477,10-10    S217.868,289.616,212.346,289.616z"></path>
                                            <path id="XMLID_400_" d="M310.123,212.083c5.522,0,10-4.477,10-10v-9.264c0-5.523-4.478-10-10-10s-10,4.477-10,10v9.264    C300.123,207.606,304.601,212.083,310.123,212.083z"></path>
                                            <path id="XMLID_424_" d="M309.879,387.393c-5.522,0-10,4.477-10,10v9.264c0,5.523,4.478,10,10,10s10-4.477,10-10v-9.264    C319.879,391.87,315.401,387.393,309.879,387.393z"></path>
                                            <path id="XMLID_425_" d="M10,351.44c-2.63,0-5.21,1.07-7.07,2.93c-1.86,1.86-2.93,4.44-2.93,7.07c0,2.64,1.069,5.21,2.93,7.07    s4.44,2.93,7.07,2.93s5.21-1.07,7.069-2.93c1.86-1.86,2.931-4.44,2.931-7.07s-1.07-5.21-2.931-7.07    C15.21,352.51,12.63,351.44,10,351.44z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="main-section__content__count">
                                <CountUp end={45895} />
                            </div>
                            <div className="main-section__content__title text-center">
                                دقیقه آموزش تولید کردیم
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainSlider;
