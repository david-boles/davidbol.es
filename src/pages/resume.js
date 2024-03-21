
import React from 'react';
import { createUseStyles } from "react-jss";
import { components } from '../styling';

/**
 * After changing, commit and push to develop, wait for Netlify to update,
 * and then run `npm run update-resume` to update the static pdf and image files.
 * 
 * You can also run `npm run update-resume dry` to avoid using API credits. The result
 * will look the same but the PDF may still include a cropped out watermark.
 * 
 * It's done this way to make sure characters aren't being merged into single glyphs (specifically ft, possibly others).
 */

const scaleFactor = 1.45;

const useStyles = createUseStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 262px',
    gridTemplateRows: 'auto 1fr',
    gridColumnGap: theme.sizing(16),
    padding: [theme.sizing(12), theme.sizing(16), theme.sizing(12), theme.sizing(16)],
  },
  head: {
    gridRow: 1,
    gridColumn: 1,
  },
  contact: {
    gridRow: 1,
    gridColumn: 2,
    ...theme.fonts.content,
    ...theme.colors.content,
    ...theme.sizing.content,
    textAlign: 'right',
    paddingTop: 16
  },
  body1: {
    gridRow: 2,
    gridColumn: 1,
  },
  body2: {
    gridRow: 3,
    gridColumn: 1,
  },
  misc1: {
    gridRow: 2,
    gridColumn: 2,
  },
  misc2: {
    gridRow: 3,
    gridColumn: 2,
  },
  name: {
    ...theme.fonts.navigation,
    ...theme.colors.headings,
    fontSize: theme.sizing(20),
    marginBottom: theme.sizing(4),
  },
  synopsis: {
    ...theme.fonts.content,
    ...theme.colors.content,
    ...theme.sizing.content,
  },
  section: {
    ...theme.fonts.navigation,
    fontSize: theme.sizing(6),
    fontWeight: '400',
    color: theme.colors.accent,
    marginTop: theme.sizing(8),
    marginBottom: theme.sizing(4),
  },
  header: {
    ...theme.fonts.headings,
    fontSize: 22,
    marginTop: theme.sizing(4),
    marginBottom: theme.sizing(1.5),
  },
  headerBold: {
    fontWeight: 400,
  },
  date: {
    ...theme.fonts.navigation,
    fontSize: theme.sizing(4),
  },
  detail: {
    fontWeight: '300',
    fontStyle: 'italic',
  },
}))

function ResumeContent() {
  const {container, head, contact, body1, misc1, body2, misc2, name, synopsis, section, header, headerBold, date, detail} = useStyles()
  return (
    <div className={container}>
      <div className={head}>
        <div className={name}>David Boles</div>
        <div className={synopsis}><i>Multidisciplinary engineer with a penchant for software. Passionate about helping build a more sustainable future.</i></div>
      </div>
      <div className={contact}>
        {false?
          <>
            Brown University
            <br/>
            69 Brown Street, #4793
            <br/>
            Providence, RI 02912
          </>
        :
          <>
            478 Monterey Road
            <br/>
            Pacifica, CA
            94044
            <br/>
          </>
        }
        <br/>
        (415) 825-2464
        <br/>
        <a href='mailto:me@davidbol.es'>me@davidbol.es</a>
        <br/>
        <a href='https://www.davidbol.es/portfolio'>www.davidbol.es/portfolio</a>
      </div>
      <div className={body1}>

        <div className={section}>Experience</div>

        <div className={header}>
          <b className={headerBold}>Tesla</b>—<i>Validation Engineer</i>
          <div className={date}>June 2022–Present</div>
        </div>
        <components.ul>
          <components.li>
            Primary engineer responsible for project management, software, electrical design, bringup, and maintenance of Hardware-In-the-Loop (HIL) firmware testers for six vehicle subsystems, including brakes and air suspension.
          </components.li>
          <components.li>
            Defined tester requirements in collaboration with firmware and integration engineers on my team. Worked extensively with electrical and mechanical teams.
          </components.li>
          <components.li>
            Extended an in-house Software-In-the-Loop (SIL) simulation engine to have real-time HIL capabilities. Now used by several other teams.
          </components.li>
          <components.li>
            The simulation engine, written in Rust, is controlled via a Python API, using PyO3.
          </components.li>
          <components.li>
            Reliably achieved &lt;2ms latency and jitter while concurrently simulating controller firmware and physics models.
          </components.li>
          <components.li>
            Conducted extensive mixed userspace and kernel tracing with LTTng to identify and mitigate unanticipated behavior in Linux' scheduling, filesystem, networking, and memory subsystems. 
          </components.li>
          <components.li>
            Implemented integrations for CAN, Ethernet, and, planned for next quarter, EtherCAT as well as Modbus over RS-422.
          </components.li>
          <components.li>
            Utilized Wireshark and libpcap to implement and troubleshoot custom protocols built on top of Ethernet's data link layer.
          </components.li>
          <components.li>
            Contributed to MDF time-series data logger, which enabled test result visualization as well as further, automated post-processing and analysis.
          </components.li>
          <components.li>
            Implemented Pytest plugins for firmware artifact handling, tester configuration and flashing, trace storage, and results reporting.
          </components.li>
          <components.li>
            Helped maintain SIL CI infrastructure including working with SCons build scripts, Docker, and Jenkins.
          </components.li>
          <components.li>
            Reviewed and validated FreeRTOS-based firmware written in C on an ad-hoc basis.
          </components.li>
        </components.ul>

        <div className={header}>
          <b className={headerBold}>Weekend Project</b>—<i>Time Series Data Visualizer</i>
        </div>
        <components.ul>
          <components.li>
            Prototype high-performance renderer for live data and MDF traces.
          </components.li>
          <components.li>
            Web frontend accelerated with WASM and WebGPU; receives pre-decimated/resampled data from backend using WebSockets.
          </components.li>
        </components.ul>

        {/* <div className={header}>
          <b className={headerBold}>Brown Space Engineering</b>—<i>Software Lead</i>
          <div className={date}>September 2018–Present</div>
        </div>
        <components.ul>
          <components.li>
            Trains new members and facilitates software development for our next satellite.
          </components.li>
          <components.li>
            Experiments with development guardrails for FreeRTOS-based firmware.
          </components.li>
          <components.li>
            Migrated our projects from Atmel Studio to an open source toolchain based on OpenOCD and Arm GCC.
          </components.li>
        </components.ul>

        <div className={header}>
          <b className={headerBold}>Duckietown Foundation</b>—<i>Research Assistant</i>
          <div className={date}>June 2020–September 2020</div>
        </div>
        <components.ul>
          <components.li>
            Adapted a college robotics course for use in high schools including validating custom mass-manufactured quadcopter kits as well as overseeing content writing and teacher training. The finished course was used by several schools and over 150 students in Fall 2020.
          </components.li>
          <components.li>
            Completed preliminary user studies, requirements drafting, and component validation for the next iteration of kits.
          </components.li>
        </components.ul>

        <div className={header}>
          <b className={headerBold}>Styra</b><i>—Software Development Intern</i>
          <div className={date}>June 2019–August 2019</div>
        </div>
        <components.ul>
          <components.li>
            Created a configurable, markdown-compatible system for
            embedding interdependent blocks of live, interactive code into public-facing
            documentation.
          </components.li>
        </components.ul>

        <div className={header}>
          <b className={headerBold}>Oracle Education Foundation</b><i>—Intern</i>
          <div className={date}>March 2016–June 2018</div>
        </div>
        <components.ul>
          <components.li>
            Developed a new Internet-of-Things course in collaboration with Program Managers.
          </components.li>
          <components.li>
            Simultaneously supported 6-8 groups of students in designing human-centered solutions using embedded systems.
          </components.li>
        </components.ul>

        <div className={header}>
          <b className={headerBold}>B.R.E.A.D. FRC Robotics Team</b><i>—Robot Division Lead</i>
          <div className={date}>September 2015–June 2018</div>
        </div>
        <components.ul>
          <components.li>
            Managed and coordinated software, electrical, and mechanical groups, composed of 
            over 40 students and several mentors, to build competition-ready, 
            80+ pound robots.
          </components.li>
          <components.li>
            Developed a modular, semi-declarative, lazily-evaluated robot control architecture for Java.
          </components.li>
        </components.ul> */}
        </div>

      <div className={body2}>

        <div className={section}>Education</div>

        <div className={header}>
          <b className={headerBold}>Brown University</b><i>—3.9 GPA</i>
          <div className={date}>September 2018–May 2022</div>
        </div>
        
        <components.p>
          B.Sc. Computer Science
          <components.ul>
            <components.li>
              Topics in Collaborative Robotics, Computer Vision, Deep Learning
            </components.li>
            <components.li>
              Formal Proof and Verification, Logic for Systems
            </components.li>
          </components.ul>
        </components.p>
        
        <components.p>
          B.A. Engineering
          <components.ul>
            <components.li>
              Instrumentation Design, Sensors and Actuators for Real Systems
            </components.li>
            <components.li>
              Control Systems Engineering, Linear System Analysis, Digital Signal Processing
            </components.li>
            <components.li>
              Digital Electronics System Design
            </components.li>
          </components.ul>
        </components.p>
        
        {/* <div className={header}>
          <b>Design​ ​Tech​ ​High​ ​School and Community Colleges</b><i>—4.0{/*48 weighted* GPA</i>
          <div className={date}>August 2014–June 2018</div>
        </div>
        <components.ul>
          <components.li>
            Design Lab 1-8<span className={detail}>—Stanford's "Design Thinking" Methodology</span>
          </components.li>
          <components.li>
            Linux Administration
          </components.li>
        </components.ul> */}
        
      </div>
      <div className={misc1}>
        <div className={section}>Skills</div>

        <components.p>
          <components.ul>
            <components.li>
              Rust
            </components.li>
            <components.li>
              Python
            </components.li>
            <components.li>
              Linux Administration
            </components.li>
            <components.li>
              Git, SVN
            </components.li>
            <components.li>
              Docker
            </components.li>
            <components.li>
              Altium
            </components.li>
            <components.li>
              Rapid Prototyping
            </components.li>
            <components.li>
              User-Centered Design
            </components.li>
          </components.ul>
        </components.p>

        <div className={section}>Previous Experience</div>

        <components.p>
          <components.ul>
            <components.li>
              Embedded C
            </components.li>
            <components.li>
              MATLAB
            </components.li>
            <components.li>
              Javascript, React
            </components.li>
            <components.li>
              Java
            </components.li>
            <components.li>
              Go
            </components.li>
            <components.li>
              Solidworks
            </components.li>
          </components.ul>
        </components.p>

      </div>
      <div className={misc2}>

        <div className={section}>Other Interests</div>
        <components.p>
          <components.ul>
            <components.li>
              Gardening
            </components.li>
            <components.li>
              Baking
            </components.li>
            <components.li>
              Ukulele
            </components.li>
            <components.li>
              French
            </components.li>
          </components.ul>
        </components.p>
      </div>
    </div>
  )
}





// --- FIT IT INTO A 8.5"x11" DIV ---

const usePageStyles = createUseStyles(theme => ({
  page: {
    width: 8.5*96,
    height: 11*96,
    overflow: 'hidden',
  },
  content: {
    width: 8.5*scaleFactor*96,
    height: 11*scaleFactor*96,
    transformOrigin: [0, 0],
    transform: `scale(${1/scaleFactor})`,
    position: 'absolute',
  }
}))

export default function Resume({children, ...props}) {
  const {page, content} = usePageStyles();
  return (
    <div className={page} {...props}>
      <div className={content}>
        <ResumeContent/>
      </div>
    </div>
  )
}