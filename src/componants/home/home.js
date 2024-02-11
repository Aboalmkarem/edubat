import { Link } from 'react-router-dom'
import './home.css'
import Card from './card'
import { useState } from 'react';


const Home = () => {
    
    let showEmplyees = true;
    let [courses, setCourses] = useState( 
        [
            {
                id:"0",
                class:"card course",
                img:"url",
                content:"text",
            },
        ]
    )
    let [otherCourses, setOtherCourses] = useState( 
        [
            {
                id:"0",
                class:"card other-course",
                img:"url",
                content:"text",
            },
        ]
    )

    return (
        <div className='home'>
            <h2>اشتراكاتك</h2>
            <h3>كورساتي</h3>
            <div className='cards courses'>
                {showEmplyees ? ( 
                    <>
                        {courses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    content = {course.content}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </div>
            <h3>كورسات اخري</h3>
            <div className='cards other-courses'>
                {showEmplyees ? ( 
                    <>
                        {otherCourses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    content = {course.content}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </div>
            <hr></hr>
            <div className='to-account'>
                <h6>اعرف تفاصيل اكتر عن حسابك</h6>
                <button>ملفك الشخصي</button>
            </div>
            <h1>مواد اديوبات</h1>
            <h4>الصف الثالث الثانوي</h4>
            <div className='subjects'>
                <ul>
                    <li><Link to='/'>اللغة العربية</Link></li>
                    <li><Link to='/'>اللغة الالمانية</Link></li>
                    <li><Link to='/'>اللغة الفرنسية</Link></li>
                    <li><Link to='/'>اللغة الانجليزية</Link></li>
                    <li><Link to='/'>الفلسفة والمنطق</Link></li>
                    <li><Link to='/'>علم النفس والاجتماع</Link></li>
                    <li><Link to='/'>الرياضيات</Link></li>
                    <li><Link to='/'>الجيولوجيا</Link></li>
                    <li><Link to='/'>الاحياء</Link></li>
                    <li><Link to='/'>التاريخ</Link></li>
                    <li><Link to='/'>الجغرافيا</Link></li>
                    <li><Link to='/'>الكيمياء</Link></li>
                    <li><Link to='/'>اللغة الايطالية</Link></li>
                </ul>
                <button>اخفاء</button>
            </div>
            <h2>اختار مدرسك</h2>
            <select>
                <option>علمي علوم</option>
                <option>علمي رياضة</option>
                <option>ادبي</option>
            </select>
            <div className='teachers'>
                <div>
                    <div><img></img></div>
                    <div>
                        <strong>اسم المدرس</strong>
                        <p>المادة</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home