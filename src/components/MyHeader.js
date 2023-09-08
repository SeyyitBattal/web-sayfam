const MyHeader = () => {
  return (
    <div className="headerDiv">
      <div className="toggle_language">
        <label className="relative inline-flex items-center mr-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>

          <span className="ml-3 text-sm font-medium text-brown-900 dark:text-brown-300">
            DARK MODE |
          </span>
        </label>

        <span className="ml-3 text-sm font-medium text-brown-900 dark:text-brown-300">
          TÜRKÇE'YE GEÇ
        </span>
      </div>
      <div className="topButtons">
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Skills
        </button>
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Projects
        </button>
        <button class="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default MyHeader;
