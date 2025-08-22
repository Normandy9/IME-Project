import React from "react";



export const Component = () => {
  return (
<div id="webcrumbs"> 
        	<div  className="min-h-screen bg-black text-blue-300 font-mono overflow-hidden relative">
	  {/* Animated background grid */}
	  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.3)_0,#000_100%)] opacity-70 z-0">
	    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
	  </div>
	  
	  {/* Cyberpunk glitch header */}
	  <header className="relative border-b border-cyan-700/50 bg-gradient-to-r from-black via-gray-900 to-black z-10">
	    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
	      <div  className="flex items-center space-x-2">
	        <span className="text-cyan-400 text-3xl font-bold tracking-tighter relative overflow-hidden group">
	          PORT<span className="text-pink-500">X</span>
	          <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300"></span>
	        </span>
	        <span className="text-xs text-gray-500 tracking-widest">v2.0.77</span>
	      </div>
	      
	      <nav className="hidden md:flex space-x-6 text-sm">
	        <a href="#calculator" className="relative px-2 py-1 hover:text-cyan-400 transition-colors group">
	          CALCULATOR
	          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
	        </a>
	        <a href="#logs" className="relative px-2 py-1 hover:text-cyan-400 transition-colors group">
	          LOGS
	          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
	        </a>
	        <a href="#port" className="relative px-2 py-1 hover:text-cyan-400 transition-colors group">
	          PORT INFO
	          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
	        </a>
	        <a href="#ship" className="relative px-2 py-1 hover:text-cyan-400 transition-colors group">
	          SHIP INFO
	          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
	        </a>
	      </nav>
	      
	      <div className="flex items-center space-x-3">
	        <button className="p-1.5 rounded-full border border-pink-700 hover:border-pink-500 hover:bg-pink-950/30 transition-all duration-300">
	          <span className="material-symbols-outlined text-pink-500 text-lg">notifications</span>
	        </button>
	        <div className="flex items-center space-x-2 border-l border-gray-800 pl-3">
	          <div className="h-7 w-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-xs font-bold text-black">NX</div>
	          <span className="text-xs hidden md:inline-block">NETRUNNER_X</span>
	        </div>
	      </div>
	    </div>
	  </header>
	
	  <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
	    {/* Port Layoff Calculator */}
	    <div id="calculator" className="lg:col-span-2 bg-gray-900/60 border border-cyan-900/60 rounded-lg overflow-hidden backdrop-blur-sm hover:border-cyan-700/60 transition-all duration-300 shadow-lg shadow-cyan-900/20">
	      <div className="bg-gradient-to-r from-cyan-900/30 via-gray-900/0 to-gray-900/0 p-4 border-b border-cyan-900/50">
	        <div className="flex justify-between items-center">
	          <h2 className="text-lg font-bold text-cyan-400 flex items-center">
	            <span className="material-symbols-outlined mr-2">calculate</span>
	            Port Layoff Calculator
	          </h2>
	          <div className="flex space-x-1">
	            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
	            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
	            <span className="h-2 w-2 rounded-full bg-green-500"></span>
	          </div>
	        </div>
	      </div>
	      
	      <div className="p-4">
	        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
	          <div  className="space-y-4">
	            <div className="space-y-2">
	              <label className="text-xs text-gray-400 block">ARRIVAL TIME</label>
	              <div className="relative">
	                <input 
	                  type="datetime-local" 
	                  className="w-full bg-gray-950 border border-cyan-900/50 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-cyan-200"
	                />
	                <div className="absolute right-3 top-2.5 text-cyan-700">
	                  <span className="material-symbols-outlined text-sm">schedule</span>
	                </div>
	              </div>
	            </div>
	            
	            <div className="space-y-2">
	              <label className="text-xs text-gray-400 block">DEPARTURE TIME</label>
	              <div className="relative">
	                <input 
	                  type="datetime-local" 
	                  className="w-full bg-gray-950 border border-cyan-900/50 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-cyan-200"
	                />
	                <div className="absolute right-3 top-2.5 text-cyan-700">
	                  <span className="material-symbols-outlined text-sm">schedule</span>
	                </div>
	              </div>
	            </div>
	          </div>
	          
	          <div className="space-y-4">
	            <div className="space-y-2">
	              <label className="text-xs text-gray-400 block">CARGO TYPE</label>
	              <div className="relative">
	                <select className="w-full bg-gray-950 border border-cyan-900/50 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-cyan-200 appearance-none">
	                  <option>Container</option>
	                  <option>Bulk Solid</option>
	                  <option>Bulk Liquid</option>
	                  <option>Vehicles</option>
	                  <option >Special Cargo</option>
	                </select>
	                <div className="absolute right-3 top-2.5 text-cyan-700 pointer-events-none">
	                  <span  className="material-symbols-outlined text-sm">expand_more</span>
	                </div>
	              </div>
	            </div>
	            
	            <div className="space-y-2">
	              <label className="text-xs text-gray-400 block">PORT CONGESTION LEVEL</label>
	              <div className="relative">
	                <select  className="w-full bg-gray-950 border border-cyan-900/50 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 text-cyan-200 appearance-none">
	                  <option>Low (0-20%)</option>
	                  <option>Moderate (21-50%)</option>
	                  <option >High (51-80%)</option>
	                  <option>Critical (81-100%)</option>
	                </select>
	                <div className="absolute right-3 top-2.5 text-cyan-700 pointer-events-none">
	                  <span  className="material-symbols-outlined text-sm">expand_more</span>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div className="mt-4 flex justify-center">
	          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-2 rounded-md font-bold transition-all duration-300 shadow-lg shadow-cyan-700/30 hover:shadow-cyan-600/40 flex items-center">
	            <span className="material-symbols-outlined mr-2">bolt</span>
	            CALCULATE LAYOFF TIME
	          </button>
	        </div>
	        
	        <div className="mt-6 bg-gray-950/80 rounded-lg border border-cyan-900/60 p-4">
	          <h3 className="text-sm text-gray-400 mb-2">CALCULATION RESULT</h3>
	          <div className="text-3xl font-bold text-cyan-400 flex items-center justify-center py-2">
	            <span className="text-5xl text-pink-500 mr-2">48</span> HOURS 
	            <span className="text-gray-500 text-sm ml-2">(2 DAYS)</span>
	          </div>
	          <div  className="text-xs text-gray-500 text-center mt-2">
	            HISTORICAL AVERAGE: 52 HOURS | PREDICTED VARIANCE: -4 HOURS
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    {/* Dashboard Logs */}
	    <div id="logs" className="bg-gray-900/60 border border-cyan-900/60 rounded-lg overflow-hidden backdrop-blur-sm hover:border-cyan-700/60 transition-all duration-300 shadow-lg shadow-cyan-900/20">
	      <div className="bg-gradient-to-r from-cyan-900/30 via-gray-900/0 to-gray-900/0 p-4 border-b border-cyan-900/50">
	        <div className="flex justify-between items-center">
	          <h2 className="text-lg font-bold text-cyan-400 flex items-center">
	            <span  className="material-symbols-outlined mr-2">monitor_heart</span>
	            Dashboard Logs
	          </h2>
	          <div  className="flex space-x-1">
	            <span  className="h-2 w-2 rounded-full bg-pink-500"></span>
	            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
	            <span className="h-2 w-2 rounded-full bg-green-500"></span>
	          </div>
	        </div>
	      </div>
	      
	      <div className="p-4">
	        <div className="flex justify-between items-center mb-3">
	          <div className="text-xs text-gray-500">SHOWING LATEST ACTIVITIES</div>
	          <button className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center">
	            <span className="material-symbols-outlined text-sm mr-1">filter_list</span>
	            FILTER
	          </button>
	        </div>
	        
	        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
	          <div className="flex items-start space-x-3 p-2 bg-gray-950/50 rounded border-l-2 border-green-500">
	            <div  className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
	            <div className="flex-1">
	              <div className="flex justify-between">
	                <span className="text-sm font-semibold text-green-400">DOCKED</span>
	                <span className="text-xs text-gray-500">13:42:07</span>
	              </div>
	              <div className="text-xs mt-1">Ship <span className="text-cyan-400">MAERSK NEXUS</span> has docked at Terminal B-7</div>
	            </div>
	          </div>
	          
	          <div className="flex items-start space-x-3 p-2 bg-gray-950/50 rounded border-l-2 border-blue-500">
	            <div className="mt-1 h-2 w-2 rounded-full bg-blue-500"></div>
	            <div className="flex-1">
	              <div className="flex justify-between">
	                <span className="text-sm font-semibold text-blue-400">UNLOADING</span>
	                <span className="text-xs text-gray-500">13:15:22</span>
	              </div>
	              <div className="text-xs mt-1">Cargo unloading in progress for <span className="text-cyan-400">EVERGREEN TITAN</span> - 45% complete</div>
	            </div>
	          </div>
	          
	          <div className="flex items-start space-x-3 p-2 bg-gray-950/50 rounded border-l-2 border-yellow-500">
	            <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
	            <div className="flex-1">
	              <div className="flex justify-between">
	                <span className="text-sm font-semibold text-yellow-400">DELAYED</span>
	                <span className="text-xs text-gray-500">12:37:56</span>
	              </div>
	              <div className="text-xs mt-1">Ship <span className="text-cyan-400">COSCO GALAXY</span> delayed due to port congestion</div>
	            </div>
	          </div>
	          
	          <div className="flex items-start space-x-3 p-2 bg-gray-950/50 rounded border-l-2 border-pink-500">
	            <div className="mt-1 h-2 w-2 rounded-full bg-pink-500"></div>
	            <div className="flex-1">
	              <div className="flex justify-between">
	                <span className="text-sm font-semibold text-pink-400">DEPARTED</span>
	                <span className="text-xs text-gray-500">11:23:10</span>
	              </div>
	              <div className="text-xs mt-1">Ship <span className="text-cyan-400">MSC QUANTUM</span> has departed from Terminal A-3</div>
	            </div>
	          </div>
	          
	          <div className="flex items-start space-x-3 p-2 bg-gray-950/50 rounded border-l-2 border-purple-500">
	            <div className="mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
	            <div className="flex-1">
	              <div className="flex justify-between">
	                <span className="text-sm font-semibold text-purple-400">SCHEDULED</span>
	                <span className="text-xs text-gray-500">10:52:49</span>
	              </div>
	              <div className="text-xs mt-1">Ship <span className="text-cyan-400">OOCL BEIJING</span> scheduled for arrival at 15:30</div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    {/* Port Info */}
	    <div  id="port" className="bg-gray-900/60 border border-cyan-900/60 rounded-lg overflow-hidden backdrop-blur-sm hover:border-cyan-700/60 transition-all duration-300 shadow-lg shadow-cyan-900/20">
	      <div className="bg-gradient-to-r from-cyan-900/30 via-gray-900/0 to-gray-900/0 p-4 border-b border-cyan-900/50">
	        <div className="flex justify-between items-center">
	          <h2 className="text-lg font-bold text-cyan-400 flex items-center">
	            <span className="material-symbols-outlined mr-2">anchor</span>
	            Port Info
	          </h2>
	          <div className="flex space-x-1">
	            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
	            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
	            <span className="h-2 w-2 rounded-full bg-green-500"></span>
	          </div>
	        </div>
	      </div>
	      
	      <div className="p-4">
	        <div className="flex justify-between items-start mb-4">
	          <div>
	            <h3 className="text-xl font-bold text-white">Neo Shanghai Port</h3>
	            <div className="text-xs text-gray-400 mt-1">31.22°N, 121.55°E • CAPACITY: 45 VESSELS</div>
	          </div>
	          <div className="px-2 py-1 bg-yellow-900/30 border border-yellow-700/50 rounded-md text-yellow-400 text-xs font-semibold">
	            CONGESTION LEVEL: 63%
	          </div>
	        </div>
	        
	        <div className="bg-gray-950/80 rounded-lg p-3 mt-3">
	          <h4 className="text-xs text-gray-400 mb-2">TERMINAL ACTIVITY</h4>
	          <div className="space-y-2">
	            <div className="flex justify-between items-center">
	              <span className="text-xs">Terminal A</span>
	              <div className="w-2/3 bg-gray-800 h-2 rounded-full overflow-hidden">
	                <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full" style={{ width: '45%' }}></div>
	              </div>
	              <span className="text-xs text-green-400">45%</span>
	            </div>
	            
	            <div className="flex justify-between items-center">
	              <span className="text-xs">Terminal B</span>
	              <div className="w-2/3 bg-gray-800 h-2 rounded-full overflow-hidden">
	                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-full rounded-full" style={{ width: '78%' }}></div>
	              </div>
	              <span className="text-xs text-yellow-400">78%</span>
	            </div>
	            
	            <div className="flex justify-between items-center">
	              <span className="text-xs">Terminal C</span>
	              <div  className="w-2/3 bg-gray-800 h-2 rounded-full overflow-hidden">
	                <div className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full" style={{ width: '92%' }}></div>
	              </div>
	              <span className="text-xs text-red-400">92%</span>
	            </div>
	          </div>
	        </div>
	        
	        <div className="grid grid-cols-2 gap-3 mt-3">
	          <div className="bg-gray-950/80 rounded-lg p-3">
	            <h4 className="text-xs text-gray-400 mb-2">CURRENT WEATHER</h4>
	            <div className="flex items-center justify-between">
	              <div className="text-3xl font-bold text-white">18°C</div>
	              <span className="material-symbols-outlined text-3xl text-blue-400">landscape</span>
	            </div>
	            <div className="text-xs text-gray-400 mt-1">WIND: 15 KM/H • VISIBILITY: GOOD</div>
	          </div>
	          
	          <div className="bg-gray-950/80 rounded-lg p-3">
	            <h4 className="text-xs text-gray-400 mb-2">BERTH STATUS</h4>
	            <div className="flex items-center justify-between">
	              <div className="text-3xl font-bold text-cyan-400">12/28</div>
	              <span  className="text-xs text-gray-400">AVAILABLE</span>
	            </div>
	            <div className="text-xs text-gray-400 mt-1">NEXT OPENING: 14:30 • BERTH B-4</div>
	          </div>
	        </div>
	        
	        <div className="mt-4 bg-gray-950/80 rounded-lg p-3">
	          <h4 className="text-xs text-gray-400 mb-2">UPCOMING ARRIVALS (24H)</h4>
	          <div className="flex justify-between space-x-2">
	            <div className="h-16 bg-cyan-900/30 rounded flex-1 flex items-center justify-center relative overflow-hidden group">
	              <div className="absolute inset-0 bg-cyan-600/10 group-hover:bg-cyan-600/20 transition-all duration-300"></div>
	              <div className="text-lg font-bold text-cyan-400">8</div>
	              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-cyan-500">CONTAINERS</div>
	            </div>
	            <div className="h-16 bg-purple-900/30 rounded flex-1 flex items-center justify-center relative overflow-hidden group">
	              <div className="absolute inset-0 bg-purple-600/10 group-hover:bg-purple-600/20 transition-all duration-300"></div>
	              <div className="text-lg font-bold text-purple-400">3</div>
	              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-purple-500">TANKERS</div>
	            </div>
	            <div className="h-16 bg-pink-900/30 rounded flex-1 flex items-center justify-center relative overflow-hidden group">
	              <div className="absolute inset-0 bg-pink-600/10 group-hover:bg-pink-600/20 transition-all duration-300"></div>
	              <div className="text-lg font-bold text-pink-400">2</div>
	              <div className="absolute bottom-1 left-0 right-0 text-center text-xs text-pink-500">BULK</div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	    {/* Ship Info */}
	    <div id="ship" className="lg:col-span-2 bg-gray-900/60 border border-cyan-900/60 rounded-lg overflow-hidden backdrop-blur-sm hover:border-cyan-700/60 transition-all duration-300 shadow-lg shadow-cyan-900/20">
	      <div className="bg-gradient-to-r from-cyan-900/30 via-gray-900/0 to-gray-900/0 p-4 border-b border-cyan-900/50">
	        <div className="flex justify-between items-center">
	          <h2 className="text-lg font-bold text-cyan-400 flex items-center">
	            <span className="material-symbols-outlined mr-2">landscape</span>
	            Ship Info
	          </h2>
	          <div className="flex space-x-1">
	            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
	            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
	            <span className="h-2 w-2 rounded-full bg-green-500"></span>
	          </div>
	        </div>
	      </div>
	      
	      <div className="p-4">
	        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
	          <div className="relative w-full md:w-1/3 lg:w-1/4">
	            <div className="bg-gray-800 rounded-lg aspect-video overflow-hidden relative">
	              <img src="https://placehold.co/800x400/001631/0096bb?text=COSCO+NEXUS" alt="Ship" className="w-full h-full object-cover" />
	              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
	                <div className="text-xs text-white">ID: XN-7824-CYB</div>
	              </div>
	            </div>
	            <div className="absolute -top-2 -right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">ACTIVE</div>
	          </div>
	          
	          <div className="mt-4 md:mt-0 flex-1">
	            <div className="flex justify-between items-start">
	              <h3 className="text-xl font-bold text-white">COSCO NEXUS</h3>
	              <div className="bg-cyan-900/30 border border-cyan-700/50 text-cyan-400 text-xs rounded px-2 py-1">
	                CONTAINER SHIP
	              </div>
	            </div>
	            
	            <div className="grid grid-cols-2 gap-4 mt-3">
	              <div>
	                <div className="text-xs text-gray-400">CURRENT STATUS</div>
	                <div className="font-semibold text-blue-400">UNLOADING AT TERMINAL B-3</div>
	              </div>
	              <div>
	                <div className="text-xs text-gray-400">ETA</div>
	                <div className="font-semibold">ARRIVED 08:45 TODAY</div>
	              </div>
	              <div>
	                <div className="text-xs text-gray-400">CAPACITY</div>
	                <div className="font-semibold">14,000 TEU</div>
	              </div>
	              <div>
	                <div className="text-xs text-gray-400">ESTIMATED DEPARTURE</div>
	                <div className="font-semibold">TOMORROW 14:30</div>
	              </div>
	            </div>
	            
	            <div className="flex space-x-2 mt-4">
	              <button className="bg-cyan-900/40 hover:bg-cyan-900/60 border border-cyan-700/60 text-cyan-400 text-xs rounded px-3 py-1.5 flex items-center transition-all duration-300">
	                <span className="material-symbols-outlined text-sm mr-1">description</span>
	                MANIFEST
	              </button>
	              <button className="bg-blue-900/40 hover:bg-blue-900/60 border border-blue-700/60 text-blue-400 text-xs rounded px-3 py-1.5 flex items-center transition-all duration-300">
	                <span className="material-symbols-outlined text-sm mr-1">history</span>
	                HISTORY
	              </button>
	              <button className="bg-purple-900/40 hover:bg-purple-900/60 border border-purple-700/60 text-purple-400 text-xs rounded px-3 py-1.5 flex items-center transition-all duration-300">
	                <span className="material-symbols-outlined text-sm mr-1">route</span>
	                ROUTE
	              </button>
	            </div>
	          </div>
	        </div>
	        
	        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
	          <div className="bg-gray-950/80 rounded-lg p-3">
	            <h4 className="text-xs text-gray-400 mb-3 flex justify-between">
	              <span>HISTORICAL LAYOFF TIMES</span>
	              <span className="text-cyan-500">LAST 6 VISITS</span>
	            </h4>
	            
	            <div className="h-40 relative">
	              {/* This would be a chart in a real implementation */}
	              <div className="absolute inset-0 flex items-end justify-between">
	                <div className="h-[20%] w-[12%] bg-cyan-700/50 hover:bg-cyan-600/60 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">10h</div>
	                </div>
	                <div className="h-[60%] w-[12%] bg-cyan-700/50 hover:bg-cyan-600/60 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">30h</div>
	                </div>
	                <div className="h-[40%] w-[12%] bg-cyan-700/50 hover:bg-cyan-600/60 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">20h</div>
	                </div>
	                <div className="h-[90%] w-[12%] bg-pink-700/60 hover:bg-pink-600/70 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">45h</div>
	                </div>
	                <div className="h-[50%] w-[12%] bg-cyan-700/50 hover:bg-cyan-600/60 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">25h</div>
	                </div>
	                <div className="h-[70%] w-[12%] bg-cyan-700/50 hover:bg-cyan-600/60 transition-all rounded-t-sm group relative">
	                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">35h</div>
	                </div>
	              </div>
	              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
	              <div className="absolute bottom-[25%] left-0 right-0 h-px bg-gray-800/50 border-dashed"></div>
	              <div className="absolute bottom-[50%] left-0 right-0 h-px bg-gray-800/50 border-dashed"></div></div></div></div></div></div></main></div> 
        </div>
  )
}