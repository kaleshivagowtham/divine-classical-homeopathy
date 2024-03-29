import styles from './styles.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function AboutMeComponent() {

    const allDays = [1,2,3,4,5,6,7];

    return (
        <div className={styles.wholeCont}>
            <Head>
                <title>Divine Classical Homeopathy</title>
                <link rel="logo icon" href="/logo.png" />
                <meta charset="UTF-8" />
                <meta name="description" content="Homeopathy website"/>
                <meta name="keywords" content="HTML, CSS, JavaScript, Next.js"/>
                <meta name="author" content="Shiva Gowtham Kale"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className={styles.topCont} style= {{backgroundImage: "url('/drImage.jpg')"}}>
                <div className={styles.topLCont}>
                    <p className={styles.heading1}>Biography</p>
                    <p className={styles.name}>Dr Varsha Magar</p>
                    <p className={styles.desc}>Dr Varsha Magar passed BHMS in 2012 and went on to assist Dr. Atul Jaggi & Dr. Latika Jaggi from 2012 to 2015. During this period, she acquired the Diploma from IACH. She practices at Nashik and Kharghar, Navi Mumbai, Maharashtra, India.</p>
                    <p className={styles.desc}>BHMS<br/>PGDPC<br/>Dip IACH (Greece)<br/>Asst. Co ordinator of E learning (IACH)</p>
                    <p className={styles.name}>Experience : 10 Years</p>
                </div>
            </div>
            <div className={styles.description}>
                <p className={styles.heading1}>Biography</p>
                <p className={styles.name}>Dr Varsha Magar</p>
                <p className={styles.desc}>Dr Varsha Magar passed BHMS in 2012 and went on to assist Dr. Atul Jaggi & Dr. Latika Jaggi from 2012 to 2015. During this period, she acquired the Diploma from IACH. She practices at Nashik and Kharghar, Navi Mumbai, Maharashtra, India.</p>
                <p className={styles.desc2}>BHMS<br/>PGDPC<br/>Dip IACH (Greece)<br/>Asst. Co ordinator of E learning (IACH)</p>
                <p className={styles.name}>Experience : 10 Years</p>
            </div>
            <div className={styles.bottomCont}>
                <p className={styles.scheduleHeading}>Clinic Timing</p>
                <div className={styles.scheduleCont}>
                    <div className={styles.eachDayCont}>
                        <p className={styles.day}>Monday : </p>
                        <p className={styles.day}>Tuesday : </p>
                        <p className={styles.day}>Wednesday : </p>
                        <p className={styles.day}>Thursday : </p>
                        <p className={styles.day}>Friday : </p>
                        <p className={styles.day}>Saturday : </p>
                        <p className={styles.day}>Sunday : </p>
                    </div>
                    <div className={styles.eachDayCont}>
                    {
                        allDays.map((item) => {
                            return (
                                <div key={item} className={styles.timeCont}>
                                    <p className={styles.day}> 10am <p className={styles.to}>-</p> 2pm </p>
                                    <p className={styles.to}>&</p>
                                    <p className={styles.day}> 5pm <p className={styles.to}>-</p> 9pm</p>
                                </div>
                            )
                        })
                    }
                    </div> 
                </div>
                <p className={styles.redText}>* Clinic also open on Sunday *</p>
            </div>
        </div>
    )
}