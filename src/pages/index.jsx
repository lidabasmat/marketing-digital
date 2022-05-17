import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import BlueBgSource from '../images/bg.svg';
import IconPic1Source from '../images/pic1.svg';
import IconPic2Source from '../images/pic2.svg';
import IconPic3Source from '../images/pic3.svg';
import IconPic4Source from '../images/pic4.svg';
import IconPic5Source from '../images/pic5.svg';
import IconPic6Source from '../images/pic6.svg';
import IconLineRightSource from '../images/line-right.svg';
import IconLineRight2Source from '../images/line-right2.svg';
import IconRightSource from '../images/right.svg';
import IconLeftSource from '../images/left.svg';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
      oficeImage: file(relativePath: {eq: "ofice.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 462
          )
        }
      }
      project1Image: file(relativePath: {eq: "project1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      project2Image: file(relativePath: {eq: "project2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      project3Image: file(relativePath: {eq: "project3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      project4Image: file(relativePath: {eq: "project4.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      project5Image: file(relativePath: {eq: "project5.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      project6Image: file(relativePath: {eq: "project6.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 223
          )
        }
      }
      dogImage: file(relativePath: {eq: "dog.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 488
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-no-repeat" style={{ backgroundImage: `url(${BlueBgSource})` }}>
        </div>
        <div className="container-md relative">
          <div className="row items-center">
            <div className="col-full md:col-6">
              <h5 className="typo-h5 text-orange-500">
                Digital Marketing
              </h5>
              <h1 className="typo-h1 mt-5">
                Work that we produce for our clients
              </h1>
              <p className="typo-intro mt-6 max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
              </p>
              <button className="bg-orange-500 text-white rounded-full text-base py-3.5 px-8 mt-12">
                Get more details
              </button>
            </div>
            <div className="col-full md:col-6">
              <Image
                image={getImage(data.heroImage)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="container-md">
          <h2 className="typo-h3 text-center mx-auto max-w-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h2>
          <h2 className="typo-h2 mt-12">
            Lorem Ipsum
          </h2>
          <p className="typo-body text-gray-300 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Image
            image={getImage(data.oficeImage)}
            className="mt-12"
          />
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="typo-h3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <p className="typo-body text-gray-300 mt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="mt-24">
            <div className="row flex-wrap justify-center">
              <div className="col-6 md:col-4 lg:col-3">
                <img src={IconPic1Source} className="mx-auto" alt="pic1 icon" />
                <p className="typo-intro mt-8 text-center">
                  Mobile Game Development
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
              <div className="col-6 md:col-4 lg:col-3">
                <img src={IconPic2Source} className="mx-auto" alt="pic2 icon" />
                <p className="typo-intro mt-8 text-center">
                  PC Game Development
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
              <div className="col-6 md:col-4 lg:col-3 mt-16 md:mt-0">
                <img src={IconPic3Source} className="mx-auto" alt="pic2 icon" />
                <p className="typo-intro mt-8 text-center">
                  PS4 Game Development
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
              <div className="col-6 md:col-4 lg:col-3 mt-16 lg:mt-0">
                <img src={IconPic4Source} className="mx-auto" alt="pic2 icon" />
                <p className="typo-intro mt-8 text-center">
                  AR/VR Solutions
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
              <div className="col-6 md:col-4 lg:col-3 mt-16">
                <img src={IconPic5Source} className="mx-auto" alt="pic2 icon" />
                <p className="typo-intro mt-8 text-center">
                  AR/ VR design
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
              <div className="col-6 md:col-4 lg:col-3 mt-16">
                <img src={IconPic6Source} className="mx-auto" alt="pic2 icon" />
                <p className="typo-intro mt-8 text-center">
                  3D Modelings
                </p>
                <img src={IconLineRightSource} className="mx-auto mt-6" alt="line-right icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 bg-gray-500 pt-16 pb-24">
        <div className="container-md">
          <h2 className="typo-h2">
            Lorem Ipsum
          </h2>
          <div className="row justify-between items-center">
            <div className="col">
              <p className="typo-body text-gray-300 max-w-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="col">
              <div className="flex">
                <img src={IconLeftSource} className="" alt="left icon" />
                <img src={IconRightSource} className="" alt="right icon" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-full md:col-6 lg:col-4 mt-16">
              <div className="bg-white rounded-3xl p-9">
                <div className="py-2 px-4 rounded-lg bg-red-100 w-32">
                  <p className="typo-small text-red-500">
                    Lorem ipsum
                  </p>
                </div>
                <h5 className="typo-h5 mt-5">
                  Lorem Ipsum
                </h5>
                <p className="typo-small mt-4 text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <div className="flex items-center justify-end mt-7">
                  <p className="typo-small text-orange-500">Read more</p>
                  <img src={IconLineRight2Source} className="ml-3" alt="line-right2 icon" />
                </div>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-16">
              <div className="bg-white rounded-3xl p-9">
                <div className="py-2 px-4 rounded-lg bg-indigo-100 w-32">
                  <p className="typo-small text-indigo-500">
                    Lorem ipsum
                  </p>
                </div>
                <h5 className="typo-h5 mt-5">
                  Lorem Ipsum
                </h5>
                <p className="typo-small mt-4 text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <div className="flex items-center justify-end mt-7">
                  <p className="typo-small text-orange-500">Read more</p>
                  <img src={IconLineRight2Source} className="ml-3" alt="line-right2 icon" />
                </div>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-16">
              <div className="bg-white rounded-3xl p-9">
                <div className="py-2 px-4 rounded-lg bg-blue-100 w-32">
                  <p className="typo-small text-blue-500">
                    Lorem ipsum
                  </p>
                </div>
                <h5 className="typo-h5 mt-5">
                  Lorem Ipsum
                </h5>
                <p className="typo-small mt-4 text-gray-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <div className="flex items-center justify-end mt-7">
                  <p className="typo-small text-orange-500">Read more</p>
                  <img src={IconLineRight2Source} className="ml-3" alt="line-right2 icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <div className="text-center mx-auto max-w-lg">
            <h2 className="typo-h3">
              Our Recent Projects
            </h2>
            <p className="typo-small mt-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="row">
            <div className="col-6 md:col-4 mt-8 md:mt-16">
              <Image
                image={getImage(data.project1Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="col-6 md:col-4 mt-8 md:mt-16">
              <Image
                image={getImage(data.project2Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="col-6 md:col-4 mt-8 md:mt-16">
              <Image
                image={getImage(data.project3Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="col-6 md:col-3 mt-8">
              <Image
                image={getImage(data.project4Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="col-6 md:col-4 mt-8">
              <Image
                image={getImage(data.project5Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="col-6 md:col-5 mt-8">
              <Image
                image={getImage(data.project6Image)}
                className="w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <div className="row items-center">
            <div className="col-full md:col-6 order-2 md:order-1 mt-10 md:mt-0">
              <Image
                image={getImage(data.dogImage)}
              />
            </div>
            <div className="col-full md:col-6 order-1 md:order-2">
              <div className="max-w-lg">
                <h2 className="typo-h2">
                  Lorem Ipsum is simply dummy text dummy text
                </h2>
                <p className="typo-body text-gray-300 mt-10">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries.
                </p>
                <p className="typo-body text-gray-300 mt-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="py-3 px-11 bg-orange-500 text-white text-base mt-12">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <div className="container-md">
          <h2 className="typo-h2">
            Lorem Ipsum
          </h2>
          <p className="typo-body text-gray-300 max-w-xl mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="bg-black text-white rounded-3xl py-10 px-5 md:px-14 mt-16">
            <div className="row items-center justify-between">
              <div className="col-full md:col-6">
                <h2 className="typo-h2">
                  Stay in the loop
                </h2>
                <p className="typo-body">
                  Subscribe to receive the latest news and updates about TDA. We promise not to spam you!
                </p>
              </div>
              <div className="col-full md:col-6 lg:col-5">
                <div className="bg-white py-1.5 pl-5 pr-1.5 rounded-xl mt-10 md:mt-0">
                  <div className="row justify-between items-center">
                    <div className="col">
                      <p className="typo-small text-gray-100">
                        Enter email address
                      </p>
                    </div>
                    <div className="col">
                      <button className="bg-orange-500 px-5 py-2 rounded-lg text-sm">Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
