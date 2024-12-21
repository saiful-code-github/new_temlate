import { CCarousel, CCarouselItem, CCarouselCaption, CButton, CContainer } from '@coreui/react';
import 'animate.css/animate.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const HomeBanner = () => {
    useEffect(() => {
        AOS.init({
          once: true,
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
    return (
        <section className="banner">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <video className="img-fluid" autoPlay loop muted style={{height: "600px", width: "100%",objectFit: "cover"}}>
                        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                    </video>
                    <CCarouselCaption className="d-none d-md-block">
                      
                       <h5 className='text-[52px] animate__animated animate__bounce'><span className='text-[72px] font-bold bg-gradient-to-t from-blue-300 via-blue-500 to-orange-500 text-transparent bg-clip-text'>F</span>irst Slide label</h5>
                        <p className='text-[24px]'>Some representative placeholder content for the first slide.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, temporibus nisi qui magnam sequi deserunt. Culpa quo vel, fugiat cupiditate sequi aspernatur veritatis eos dicta.
                        </p>
                        <CButton className='bg-white text-black capitalize'>Click Me</CButton>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <video className="img-fluid" autoPlay loop muted style={{height: "600px", width: "100%",objectFit: "cover"}}>
                        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
                    </video>
                    <CCarouselCaption className="d-none d-md-block">
                    <h5 className='text-[52px]'><span className='text-[72px] font-bold bg-gradient-to-t from-blue-300 via-blue-500 to-orange-500 text-transparent bg-clip-text'>F</span>irst Slide label</h5>
                    <p className='text-[24px]'>Some representative placeholder content for the first slide.</p>
                        <p>Some representative placeholder content for the first slide.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, temporibus nisi qui magnam sequi deserunt. Culpa quo vel, fugiat cupiditate sequi aspernatur veritatis eos dicta.
                        </p>
                        <CButton className='bg-white text-black capitalize'>Click Me</CButton>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <video className="img-fluid" autoPlay loop muted style={{height: "600px", width: "100%",objectFit: "cover"}}>
                        <source
                            src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <CCarouselCaption className="d-none d-md-block">
                    <h5 className='text-[52px]'><span className='text-[72px] font-bold bg-gradient-to-t from-blue-300 via-blue-500 to-orange-500 text-transparent bg-clip-text'>F</span>irst Slide label</h5>
                    <p className='text-[24px]'>Some representative placeholder content for the first slide.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, temporibus nisi qui magnam sequi deserunt. Culpa quo vel, fugiat cupiditate sequi aspernatur veritatis eos dicta.
                        </p>
                        <CButton className='bg-white text-black capitalize'>Click Me</CButton>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
            <CContainer>
            <p data-aos="flip-left" data-aos-delay="50" className='text-justify mt-2 mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos modi, enim corrupti voluptas nisi cupiditate. Enim error excepturi, eaque ex quod pariatur illum nulla recusandae molestiae soluta ducimus quaerat eos consequatur nesciunt tenetur totam repellendus tempore natus laudantium quis voluptatum eum, laboriosam assumenda odio. Harum nemo illum minima fuga sit esse ullam quia iure tempora quo eius possimus sint nihil reprehenderit qui ipsum magni, dolor, impedit repudiandae. Ad vel exercitationem accusantium porro at quo fugit, iste eos tempora excepturi. Quasi ab quis debitis! Aspernatur aut provident quis amet reiciendis explicabo vel tempore harum at! Consectetur, quibusdam distinctio accusamus neque, quia sint expedita in asperiores nostrum ea tenetur rem nemo veritatis iste et doloremque a dolorem hic dignissimos incidunt! Unde, laudantium dignissimos corrupti eos magnam libero doloribus eius aperiam facilis adipisci obcaecati suscipit tempore? Ex totam similique ut nisi in earum eius fugiat ipsa cumque sequi fugit placeat, laborum tempora suscipit quis minus! Vero laboriosam optio ratione totam quisquam, maxime repellendus quidem inventore id numquam tempora error fuga. Ratione necessitatibus ab ullam ipsa perspiciatis labore libero quae cumque odit voluptatem architecto excepturi consequuntur soluta explicabo quisquam exercitationem fuga cupiditate velit, quasi, impedit laborum. Cum quo assumenda soluta voluptate obcaecati voluptas reiciendis, id pariatur eligendi nobis minima eum libero hic natus saepe dolor aliquam eaque ab ad aspernatur neque quisquam! Veritatis qui quam tempore possimus architecto delectus dolorem animi obcaecati totam fuga vel impedit accusamus cumque corrupti alias nam neque, fugiat, dolorum sunt consequatur vitae reprehenderit! Corporis delectus excepturi aliquam distinctio repellendus, officiis assumenda quas unde fugiat esse vel deserunt, beatae cumque molestias aspernatur. Enim, facilis ab? Facere aspernatur omnis dolorem. Soluta, et itaque? Laborum reiciendis assumenda doloribus delectus. Praesentium cupiditate tempora maxime quod laborum quas similique illo ducimus sed, a reiciendis quasi nemo laboriosam nulla. Corrupti sed, sunt in consequuntur aliquam eaque qui vel facere quos laboriosam dignissimos quod, quaerat inventore asperiores aperiam exercitationem, obcaecati velit voluptas! Saepe consequuntur mollitia ullam ut officiis, sed, amet ratione fugit fuga officia, eum quis illo autem? Error facere repudiandae sunt vero, quis eveniet nam suscipit placeat commodi ab at iste blanditiis a tempore maxime esse est corporis voluptates optio praesentium veniam sapiente sequi nemo et? Nulla laudantium voluptatibus quia facilis. Unde deserunt adipisci totam blanditiis nam inventore excepturi voluptatum fugiat? Necessitatibus explicabo, libero consequuntur ad cupiditate corrupti dolorum eius hic architecto quasi eligendi blanditiis, ab reiciendis ipsum, ex laudantium magni illum itaque ratione? Hic officia illo deserunt veritatis eos minus doloribus ex numquam rem maiores laudantium quas nulla nobis expedita, ipsa dignissimos voluptate asperiores? Unde culpa inventore dolores odit, itaque ullam ratione debitis libero voluptatibus illo ea quo provident deserunt enim aliquam, quibusdam error quam facere vitae necessitatibus sequi maiores! Voluptatem expedita in officia sequi blanditiis quam consectetur itaque a eos quia eligendi corrupti earum sapiente nostrum est, voluptas et. Sapiente non incidunt quae officia nesciunt nostrum dolore reiciendis, facilis alias harum, asperiores, ipsum saepe. Iusto inventore laboriosam soluta ducimus vel eveniet blanditiis est odit, fugiat adipisci eum cumque quia beatae commodi at alias? Quam sint aut debitis modi, doloremque cumque sit minima ipsam, fugiat, repellendus beatae. Reiciendis, sit harum nihil nulla odit aspernatur obcaecati repudiandae cupiditate neque illum atque. Voluptates neque ducimus tempora fugit vitae veniam nihil dicta sunt ex aperiam adipisci velit quidem consequatur aut, libero voluptatem possimus totam! Maiores necessitatibus quas ea eius assumenda consequuntur quidem praesentium cum minima magni voluptatibus cupiditate, neque ab quisquam at similique, repudiandae incidunt qui quaerat debitis. Tenetur, aspernatur? Sit animi incidunt cupiditate accusantium? Adipisci corporis fuga doloremque dolorem doloribus, ipsa qui ea quae est ex assumenda possimus asperiores quisquam expedita? Aliquam reprehenderit blanditiis assumenda sit quos, dolore cupiditate perspiciatis, vero eos aliquid et tenetur nisi numquam, laudantium molestiae. Itaque eveniet sint iure blanditiis, hic totam ullam doloribus ea labore, libero veniam minima minus tempore? Omnis, modi accusamus eligendi dolorem a mollitia illum ducimus deleniti porro hic magni dolorum quibusdam eum ratione fugiat? Praesentium laudantium nemo accusantium commodi in eveniet necessitatibus similique, ex eaque iure obcaecati esse iste, quia vitae temporibus facilis recusandae fugiat facere officia eligendi. Harum omnis nihil aut ab assumenda? Doloremque, perspiciatis numquam! Amet, porro omnis repudiandae rem fugit alias commodi voluptatibus dolorum exercitationem at eveniet quos provident incidunt suscipit deleniti inventore consequatur voluptates in non? Facilis ratione dolor laboriosam explicabo vel, culpa aliquid ipsa beatae nisi fuga est dolore animi eligendi labore qui sit quisquam impedit debitis molestias magni placeat sunt corporis nam! Dolorum neque placeat obcaecati in cumque similique illo cupiditate amet nisi voluptatibus, ipsam dolor autem, expedita accusamus corrupti nam maiores distinctio? Iure nesciunt sunt necessitatibus quia illo aperiam consequatur molestias fugit consectetur iste id illum quidem reiciendis earum, asperiores, explicabo alias autem veniam et assumenda quisquam culpa quae minus! Expedita nostrum inventore eos tenetur numquam accusantium soluta possimus qui? Natus fugiat ea a ratione impedit modi dolorem delectus aliquam qui id nobis, vero deserunt velit rem assumenda dolorum voluptates nemo quos quod quo. Sed odit dolore autem quia officiis quod eveniet nihil aperiam ullam, laborum consectetur obcaecati est deleniti. Quisquam quaerat dicta sed nemo iure nihil officia cumque vel tempora dolorem maxime assumenda itaque voluptate cupiditate atque vitae cum quidem, quas natus totam aliquid ullam, voluptatum recusandae? Quia odit quidem expedita perferendis eos unde nulla autem itaque, laboriosam, maxime fuga non error eaque eligendi consequatur qui? Modi, magni possimus, maxime illo tempore quasi consectetur eos, dignissimos cumque nulla quisquam. Id, consequatur nulla voluptatem nobis, quo dolore deleniti asperiores hic ipsam, porro dolores iusto magni beatae eligendi repudiandae sint nisi sed ab tempore aperiam aut sapiente! Illum vel consequatur cupiditate, beatae nobis dignissimos aspernatur quaerat deserunt repellat quod suscipit eaque recusandae dolore temporibus doloremque consectetur obcaecati quam odio architecto nam! Quaerat ex alias tempore vero eaque eveniet a rem deserunt vitae similique voluptatum consequuntur dolore, fugit modi itaque voluptates quidem facere nostrum, odio blanditiis voluptatibus repudiandae. Natus non unde commodi id voluptas consequatur sed. Repellendus debitis animi est amet tempore voluptas beatae nam eaque, optio consequatur placeat qui aut error consectetur porro reprehenderit, minima provident expedita dolorem suscipit maxime.
            </p>
            </CContainer>
        </section>
    )
}

export default HomeBanner;