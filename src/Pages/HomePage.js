import React from "react";
import './Css/HomePage.css';
import q from '../images/q.jpg';
import mac2 from '../images/mac2.jpg';
import mac3 from '../images/mac3.jpg';
import macair from '../images/macair.jpg';
import mac4 from '../images/mac4.png';
import mi1 from '../images/mi1.png';
import mi2 from '../images/mi2.png';
import Carousel from 'react-bootstrap/Carousel';

const HomePage =()=>{
    return(
        
        <div className="HomePage">
            <Carousel>
      <Carousel.Item>
      <img src={q} alt="picture" className="mac"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={mac2} alt="picture" className="mac"/>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={macair} alt="picture" className="mac"/>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            <h1 className="Header">Supercharged for pros.</h1>
            <p className="para">
The most powerful MacBook Pro ever is here.<br></br> 
With the blazing-fast M1 Pro or M1 Max chip — <br></br>
the first Apple silicon designed for pros — <br></br>
you get groundbreaking performance and amazing <br></br>
battery life. Add to that a stunning Liquid Retina<br></br> 
XDR display, the best camera and audio ever in a Mac <br></br>
notebook, and all the ports you need. The first notebook<br></br>
 of its kind, this MacBook Pro is a beast.</p>
 

            <img src={mac2} alt="picture" className="mac2"/>
            
          
            <img src={mac4} alt="picture"  className="mac4"></img>
            <div>
<section id="services">
  <div className="container">
    <h1>Our Services</h1>
    <div className="row services">
      <div className="col-md-3 text-center">
        <div className="icon">
         <i className="fa fa-hotel"></i>
        </div>
        <h3><a href="">HOTEL</a></h3>
        
        <p>Sri Lanka’s ancient kingdoms date back over 2,500 years, giving its wildlife, waterfalls, ruins and reams of tea plantations an aura of enlightenment. As an island nation, the country benefits from a wonderful feeling of remoteness, making it easy to lose yourself amidst the tropical rainforests, immaculate white-sand beaches and age-old towns. The southern Hill Country is home to Ella, with its rumbling Ravana Falls and the 1,300-metre-high cliff or Ella’s Rock - reachable via a scenic two-hour trek along a tea-house-laden railway track.</p>
        <a href="image/hotel/queen.jpg" data-lightbox="mygallery" data-title="At Queen’s Hotel, we promote the safety and well-being of our guests while having a comfortable and enjoyable stay with us. Considering the current pandemic situation around the globe with regard to COVID-19, guests can expect to see evolved procedures in every area of the hotel, which will include the following touch points

uest guests to inform the front desk well in advance of their check- out plans in order for us to prepare the invoices to minimize guest waiting time at the check-out desk. Guests are politely requested to inform the hotel if they show any symptoms within 14 days after their departure from the hotel. A follow-up call/email on their health condition will be made to the guest after 10 days" class="buy-btn">Read More</a>
              
      </div>
      <div className="col-md-3 text-center">
        <div className="icon">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <h3><a href="">RESTURENT</a></h3>
        <p>There are some common elements, to be sure. But the "rice and curry" spreads that make up most Sri Lankan meals are pretty different from the northern saag paneer or Goan vindaloo at your local lunch buffet. Sri Lankan food offers a vivid array of flavor combinations: sweet caramelized onion relishes, bitter melon, spicy scraped coconut, and the burn of curry tamed by mild rice, and palm sugar sweetened desserts. Samosas and dhal (lentil curry) look familiar, but upon closer inspection, these, too, have a definitively Sri Lankan spin</p>
        <a href="image/hotel/res.jpg" data-lightbox="mygallery" data-title="Si Lankan cuisine is known for its particular combinations of herbs, spices, fish, vegetables, rices, and fruits. The cuisine is highly centered around many varieties of rice, as well as coconut which is an ubiquitous plant throughout the country. Seafood also plays a significant role in the cuisine, be it fresh fish or preserved fish. As a country that was a hub in the historic oceanic silk road, contact with foreign traders brought new food items and cultural influences in addition to the local traditions of the country's ethnic groups, all of which have helped shape Sri Lankan cuisine. Influences from Indian (particularly South Indian), Indonesian and Dutch cuisines are most evident with Sri Lankan cuisine sharing close ties to other neighbouring South and Southeast Asian cuisines.<br><br>
spice in Sri Lanka, and has a more delicate, sweet taste in comparison to Cinnamomum cassia which is more common in some other South Asian cuisines. Contrasting the local cuisine with those of neighbouring regions, Sri Lankan cuisine is characterized by unique spice blends with heavy use of Sri Lankan cinnamon and black pepper, as well as by the use of ingredients such as maldive fish, goraka (garcinia cambogia), pandan leaf, lemongrass, and jaggery made from the kithul palm syrup. Sri Lanka is also a consumer of many varieties of red rice, some of which are considered heirloom rices in the country. Tea is also an important beverage throughout the country, and Sri Lanka is known for producing some of the world's finest tea." class="buy-btn">Read More</a>
      </div>
      <div className="col-md-3 text-center">
        <div className="icon">
         <i className="fa fa-coffee"></i>
        </div>
        <h3><a href="">CAFE</a></h3>
        <p>A pack of your favorite Lamprai arrives at your table, banana leaf unfolded on a 'pan-wattiya', filling the air with aromas that is sure to make you nostalgic. That is exactly what you will be getting at Dinicious! You can take a walk down memory lane with your friends and family seated around a table on a weekend, enjoying some good old fashioned hoppers , made to order. Reminisce good times while devouring a mound of tangy Kottu-Roti, that will strike all the right chords along with a ginger beer by your side..</p>
        <a href="image/hotel/cafe.jpg" data-lightbox="mygallery" data-title="The first arabica coffee plants introduced to Ceylon may have arrived from Yemen via India, by Muslim pilgrims in the early 17th century. However, the Sinhalese were unaware of the use of berries in preparing a beverage They only used the young leaves for curries and the flowers as offerings at their temples.<br><br>

The first attempt at systematic cultivation of coffee was undertaken by the Dutch in 1740. It was initiated by Governor Baron van Imhoff and his successors; van Gollenesse and Loten. However, it was confined to the low-country and was relatively unsuccessful with low levels of production. Production was also restricted by the Dutch East India Company as they did not want competition against coffee produced on their plantations in Java. By 1762, annual coffee production was only 100,000 pounds.
The British, who first arrived on the island in 1796 and took control in 1815, continued experiments with coffee production. These early ventures, mainly in the coastal areas around Galle,failed due to the unsuitability of the area for coffee cultivation. The first to successfully grow coffee on a commercial scale was George Bird, who established a coffee plantation in Singhapitiya. Edward Barnes, who became Governor of Ceylon in 1824, established another plantation in Gannoruwa in 1825 (now a part of the Royal Botanical Gardens, Peradeniya). These were followed by a number of other government officials establishing plantations in the region. The only native to grow coffee on a commercial scale was Jeronis de Soysa and about a quarter of the total production was from the smallholdings of native farmers. Most of these early ventures were economically unsuccessful, due to a number of factors including unsuitability of the lowland areas, competition from the West Indies, lack of cultivation skills and poor infrastructure. The first plantation in the mountainous Kandyan area, was established in 1827 which, a few years later, spread to many other areas in the country, becoming profitable.
<br><br>Coffee growing regions areas of Sri Lanka
<br>Cultivation of Coffea arabica
<br> Cultivation of Coffea robusta
<br><br>At the initiative of the British colonial administration, Sri Lanka experimented with coffee as a plantation crop in the 1830s. Sri Lankan coffee cultivation and export prospered when the West Indies ended slavery, which affected its extensive coffee production. Further expansion occurred when the British government in Sri Lanka sold government lands they had obtained from the kings of Kandyan. Tamil labour from South India was recruited by the 1830s. During the period 1830–1850, coffee production assisted in the country's development and a capitalist society emerged. The Bank of Ceylon supported the proliferation of coffee estates, which resulted in infrastructure development within the Kandyan region. During the period of worldwide economic depression in 1846, production declined, conflicts arose, and taxes were levied to compensate the losses to the economy, due to the falling price of coffee. Labour conscription was introduced in 1848, causing a rebellion, which was later quelled.[20] However, the plantation era transformed Sri Lanka; nearly one third of the plantation area was owned by the local people. With high demand and prices for coffee in the European market, coffee planting increased. Investors flocked to Ceylon from overseas and around 100,000 ha (386 sq mi) of rain forest was cleared to make way for coffee plantations. The term Coffee rush was coined to describe this developing situation in 1840. By 1860, Sri Lanka, Brazil and Indonesia, were the three largest coffee-producing countries in the world." class="buy-btn">Read More</a>
      </div>
      <div className="col-md-3 text-center">
        <div className="icon">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <h3><a href="">SUPER MARKET</a></h3>
        <p>Shopping for groceries comes with several things – getting stuck in the traffic, walking up and down the aisle, and standing in line for the checkout, among other things most of us would rather not face. It’s good when you have the time and you like to do it all, but what if you are feeling unwell and living on your own and the fridge is empty, or some other “disaster”?We are very fortunate to live in an age where almost anything is available at the click of a button. If you think shopping is a chore and you’d rather not do it,</p>
        <a href="image/hotel/supermarket.jpg" data-lightbox="mygallery" data-title="Arpico Super Centre also popularly simply known as Arpico is a chain of supermarkets which is also regarded as a departmental store located in Sri Lanka owned by Richard Pieris & Company. The retail shopping mall was initially started with the concept of supermarket and then transformed its business operations as a supercentre. It is one of the three largest retail operators on the island, alongside Cargills Food City and Keells Super. Arpico Super Centre is also regarded as one of the two most popular departmental stores in Sri Lanka along with ODEL. The Richard Pieris & Company, pioneered the concept of hypermarkets in Sri Lanka through their Arpico Super Centre chain. The store sells various types of goods in different sections under the building's roof and the headquarters is situated at Maharagama in High Level Road. <br><br>Cargills (Ceylon) PLC is a Sri Lankan Retail, FMCG, Banking and Restaurant company which is listed on the Colombo Stock Exchange. The controlling interest in the company is held by Ceylon Theatres PLC.In 1844 British businessman William Milne started ‘Milne & Company',[3] general warehousemen, importers of oilman stores etc,[4] with branches in Kandy and Galle. In 1850 Milne was joined by his friend, David Sime Cargill,[5] and the firm became ‘Milne, Cargill & Co'.[6] In 1860 Milne retired from business in Ceylon and moved back to Scotland to form a company in Glasgow to look after the business of Cargill & Co. in the UK. Cargill became the sole partner until he was joined by David MacKenzie and the name was changed to ‘Cargill & Co’. The company had a Colombo office at the intersection of Price and York Streets in Colombo Fort, a Kandy office at Upper Lake Road and an office in Galle Fort at 22 Pedlar Street. The Galle office was closed down in 1863. In 1890 the business expanded with the purchase of 'Medical Hall,’ a chemist and druggist company. Cargills also established another company, ‘Sime & Co.’,[6] which sold lower quality goods. In 1896 Cargill & Co. was converted into a Limited Liability Company registered in Glasgow.Two years later, the company bought James McLaren &Co.’s business in Nuwara Eliya, establishing a branch there.<br><br>Lanka Sathosa also known as Sathosa is a wholesale and retail chain located in Sri Lanka. It is considered to be the largest state-owned retail chain in the country and was established in 2005.[1] Sathosa was incorporated as a state-owned enterprise under Companies Act no 7 of 2007 and it is regulated by the Ministry of Industry and Commerce. The main function of Sathosa is to set prices of many essential items in the domestic retail market.
Nushad Perera was appointed as the chairman of Lanka Sathosa in January 2020.[2] As of 2019, the retail chain expanded its branch of network beyond 400.[3] Sathosa has also guaranteed to sell essential items at concessionary prices during tough times including the coronavirus pandemic in the country.[4] However it has also been widely criticised in recent years for continuous loss making and defaulting on payments to suppliers" class="buy-btn">Read More</a>
      </div>
    </div>
  </div>

</section>
            </div>

            
            
        </div>
    );
}
export default HomePage;
