const MindMap = () => {
  return (
    <section className="px-8 w-[75%] flex flex-col items-center mx-auto text-white mb-[60px]">
      <h2 className="text-[32px] leading-none -tracking-wide uppercase break-normal mb-6">
        MIND map
      </h2>
      <div className="py-6 px-3 bg-dark rounded-xl mb-6">
        <p className="font-messina text-xs font-light uppercase leading-[1.17] w-[192px] mb-[78px]">
          All owners of APE NFTs and all future collections will receive a
          percentage of sales based on the number of NFTs they own
        </p>
        <h3 className="text-2xl">YAPE DROP</h3>
      </div>
      <ul className="flex font-biro text-2xl gap-12 ">
        <li>Prev</li>
        <li>Next</li>
      </ul>
    </section>
  );
};

export default MindMap;
