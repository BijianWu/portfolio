import React, { useState } from "react";

export default function Skills(){
    const [state, setState] = useState(1);
    const skill_1_className = state === 1 ? "skills__content skills__open" : "skills__content skills__close";
    const skill_2_className = state === 2 ? "skills__content skills__open" : "skills__content skills__close";
    const skill_3_className = state === 3 ? "skills__content skills__open" : "skills__content skills__close";
    const skill_4_className = state === 4 ? "skills__content skills__open" : "skills__content skills__close";

    const changeState = (num) => {
        if(state === num) {
            setState(0);
        } else{
            setState(num);
        }
    }
    return <>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
        <div>

        {/* <!--====== SKILLS 1=======--> */}
        <div className={skill_1_className}>
            <div className="skills__header" onClick={ () => changeState(1)}>
                <i className="uil uil-server-network skills__icon"></i>

                <div>
                    <h1 className="skills__titles">Backend Developer</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__python"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__node"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__java"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__php"></span>
                </div>


            </div>

            </div>
            </div>
        </div>

        {/* <!--====== SKILLS 2=======--> */}
        <div className={skill_2_className}>
            <div className="skills__header"  onClick={ () => changeState(2)}>
            <i className="uil uil-atom skills__icon"></i>

            <div>
                <h1 className="skills__titles">Frontend Developer</h1>
                <span className="skills__subtitle">More than 3 years</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                <span
                    className="skills__percentage skills__js"
                ></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__js"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">TypeScript</h3>
                <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__ts"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">HTML</h3>
                <span className="skills__number">95%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__html"></span>
                </div>
            </div>

            <div className="skills__data">
                <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                <span className="skills__percentage skills__css"></span>
                </div>
            </div>
            </div>
        </div>

    {/* <!--====== SKILLS 3=======--> */}
    <div className={skill_3_className}>
        <div className="skills__header"  onClick={ () => changeState(3)}>
        <i className="uil uil-brackets-curly skills__icon"></i>

        <div>
            <h1 className="skills__titles">Game Developer</h1>
            <span className="skills__subtitle">More than 2 years</span>
        </div>

        <i className="uil uil-angle-down skills__arrow"></i>
        </div>

        <div className="skills__list grid">
        <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">Unity</h3>
            <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
            <span className="skills__percentage skills__unity"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">Unreal Engine</h3>
                <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
                <span className="skills__percentage skills__unreal"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">C#</h3>
            <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
            <span className="skills__percentage skills__cshape"></span>
            </div>
        </div>

        <div className="skills__data">
            <div className="skills__titles">
            <h3 className="skills__name">C++</h3>
            <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
            <span className="skills__percentage skills__cpp"></span>
            </div>
        </div>

        </div>
    </div>

            {/* <!--====== SKILLS 4=======--> */}
            <div className={skill_4_className}>
            <div className="skills__header"  onClick={ () => changeState(4)}>
                <i className="uil uil-apps skills__icon"></i>

                <div>
                <h1 className="skills__titles">Software Developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            <div className="skills__list grid">
                <div className="skills__data">
                <div className="skills__titles">
                    <h3 className="skills__name">Visual Studio</h3>
                    <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                    <span
                    className="skills__percentage skills__visual-studio"
                    ></span>
                </div>
                </div>

                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">Electron Js</h3>
                        <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                        <span className="skills__percentage skills__electronjs"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <div className="skills__titles">
                        <h3 className="skills__name">QT</h3>
                        <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                        <span className="skills__percentage skills__qt"></span>
                    </div>
                </div>
                
            </div>
            </div>


        </div>

      </section>
    </>
}