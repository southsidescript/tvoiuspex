import style from '@/app/global.module.scss'
import Typewritter from '@/components/organisms/TypeWritter/Typewritter';
import Image from 'next/image';
import TypeWritter from '@/components/organisms/TypeWritter/Typewritter';
import { Suspense } from 'react';

const Welcome = () => {
  const data =  ['Разрабатывает стратегии', 'Создает положительный имидж', 'Повышает имидж бренда', 'Привлекает новых клиентов через эффективные стратегии']



    return(
        <section id='home' className={style.home}>
           <article      className={style.home_portret}>

      
            <Image
                src={'/main-img.JPG'}
                fill
                alt='portret'
                priority={true}
            
                />   
  
           
            </article>     
           

            <article className={style.home_desc}>
                
                <div className={style.home_desc_name}>Алина</div>
                <div className={style.home_desc_title}>Квалифицированный маркетолог международного уровня</div> 
                 <div className={style.home_desc_skills}>
                     <ul>
                        <li>Создает положительный имидж</li>
                        <li>Повышает узнаваемость бренда</li>
                        <li>Привлекает новых клиентов через эффективные стратегии</li>
                    </ul>
                 </div>

               
               
            </article>         
 

        </section>
    )
}

export default Welcome;