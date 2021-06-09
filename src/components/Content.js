import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';
import ImageThree from '../images/pic1.jpg';
import ImageFour from '../images/pic2.webp';
import ImageFive from '../images/pic5.webp';
import ImageSix from '../images/pic6.webp';
import ImageSaven from '../images/pic7.webp';
import ImageEight from '../images/pic8.webp';
import ImageNine from '../images/pic9.webp';
import ImageTen from '../images/pic10.webp';
import ImageEleven from '../images/pic11.webp';
import ImageTwevel from '../images/pic12.webp';

const Content = () => {
  return (
    <>
      <div className="flex  grid md:grid-cols-4 sm:grid-cols-1 sm:m-10 gap-2">
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageOne} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Spicy Pasta
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$45
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This combination of spicy ground beef and pasta makes a delicious, satisfying family meal. Enjoy it as-is or add a cheese topping and pop it in the oven to melt the cheese.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageTwo} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
          Beef Enchilada Casserole
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$50
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This easy Mexican style casserole is made with condensed soups, enchilada sauce, chili peppers, ground beef, cheese, and tortilla chips</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageThree} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Beef Casserole With Potatoes
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$20
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>A quick and easy whole-meal casserole with lean ground beef, potatoes, carrots, cream of mushroom soup and cheddar cheese.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageFour} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Juicy Baked Burgers
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$10
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>Worcestershire and steak sauce add flavor to these juicy burgers, along with a little garlic powder and cayenne pepper. Serve them with your favorite sauce or flavored mayonnaise, with or without cheese.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageFive} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Macaroni and Cheese Casserole
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$20
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This great tasting family casserole is a meal in one dish. The "sloppy" part of this macaroni and cheese recipe is tasty sloppy Joe -- a ground beef layer is followed by a creamy and rich homemade macaroni and cheese layer, then topped with bread crumbs and baked to perfection. </p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageSix} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Instant Pot Lasagna
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$30
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This instant pot lasagna recipe takes much less time to prepare than a conventional lasagna baked in an oven. It's made with ground beef, mozzarella and Parmesan cheeses, marinara sauce, and no-boil noodles. Best of all, it won't heat up the kitchen on a warm summer day.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageSaven} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Jack Beef and Biscuits Casserole
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$20
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This mixture of beef and beans is well-seasoned and makes a great everyday family dinner. With a biscuit topping, it's a complete meal in one dish.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageEight} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Cabbage Skillet Dinner
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$60
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>Cabbage rolls are one of those all-time favorite comfort foods. The most time-consuming prep steps are avoided with this easy skillet version of the dish. There's no need to fuss with whole cabbage leaves and the task of stuffing them.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageNine} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Crock Pot Pizza Pasta Casserole
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$40
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>This delicious meal combines pizza flavors and two kinds of cheese to make a fabulous sauce for pasta. The sauce is cooked in the slow cooker. Combine the sauce with the pasta and cheeses and finish the dish in the slow cooker -- or transfer everything to a baking dish, top with the remaining cheese, and bake the casserole in the oven.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
       
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageTen} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Instant Pot Sloppy Joes
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$30
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>TMake Instant Pot sloppy joes and enjoy an effortless family dinner or potluck dish. Simply brown the ground beef, then combine all the ingredients in the pot. Let it cook, and in about 45 minutes, you're ready to build sandwiches.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
       
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageEleven} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Taco Casserole
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$25
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>Taco seasonings, tomato sauce, corn chips, lean ground beef, cheese, and taco toppings turn this Mexican favorite into an easy weekday dinner.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
        
      </div>
      <div className="max-w-sm p-3 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded overflow-hidden shadow-lg">
        <img src={ImageTwevel} alt="" className="w-full" />
        <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
        Instant Pot Bolognese Sauce
        </div>
        <ul>
            <li className="font-bold text-xl mb-2">
              Price :$30
            </li>
            <li className="text-black font-bold">
              Description:
            </li>
            <p>Bolognese is a classic Italian meat sauce that tastes great on wide pasta like pappardelle or in homemade lasagna. The long cook time is shrunk down when made in a pressure cooker.</p>
           
            
          </ul>
          <button className="bg-yellow-400 text-bold p-2 mt-2">Order Now</button>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Content;
