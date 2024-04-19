import React from 'react'

const About = () => {
  return (
    <div id="about" className="min:h-screen py-[150px] bg-white">
      <div className="flex flex-col justify-center items-center px-10 lg:px-40 ">
        <div className="flex flex-col md:flex-row lg:flex-row ">
          <div className="flex flex-col py-20 w-full md:w-[50%] ">
            <p className="text-sm font-medium relative text-[#000]">
              The world’s only enterprise blockchain solution for global
              payments
            </p>
            <p className=" text-2xl font-medium mt-3 text-[#2d3a4b] ">
              Best Blockchain & Better Than Any Blockchain
            </p>
            <p className="text-sm font-medium mt-7 relative text-[#6f6f6f] leading-[30px] tracking-wider">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="text-sm font-medium mt-7 relative text-[#6f6f6f] leading-[20px] tracking-wider">
              Cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>

          <div className="w-full md:w-[50%] flex justify-center items-center ">
            <img
              className="w-[70%]"
              src="https://demos.webicode.com/html/ico-chain/html/images/chain-img.png"
              alt="img"
            />
          </div>
        </div>

        <div className="card-container flex sm:flex-col md:flex-row flex-wrap mt-14 gap-12 md:gap-5 lg:[min:gap-11] grid-cols-2 w-full ">

          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>
          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>
          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>
          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>
          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>
          <div className="card flex flex-col items-center md:items-start md:w-[31%] pt-5  ">
            <p>icon</p>
            <p className="text-lg font-semibold mt-5 relative text-[#6f6f6f] tracking-normal">
              Peer-to-Peer Transactions
            </p>
            <p className="text-sm font-medium mt-2 relative text-[#6f6f6f] tracking-normal">
              Contrary to popular belief , Lorem Ipsum is not simply random
              text. It has roots in a piece
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About