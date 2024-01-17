let USER_DATA = {

    config: {
      query: { name: "query", label: "query", type: "search", isrequired: true },
      area: {
        name: "area",
        label: "area",
        type: "MC_dropdown",
        isrequired: false,
        options: { north: "north", south: "south" },
      },
      age_groups: {
        name: "age_groups",
        label: "age groups",
        isrequired: true,
        type: "MC_dropdown",
        options: {
          under_18: "under 18",
          _18_24: "18-24",
          _25_34: "25-34",
          _35_44: "35-44",
          _45_54: "45-54",
          _85_and_over: "85 and over",
        },
      },
      status: {
        name: "status",
        label: "status",
        type: "MC_dropdown",
        isrequired: true,
        options: { student: "student", citizen: "citizen", solider: "solider" },
      },
      population: {
        name: "population",
        label: "population",
        isrequired: false,
        type: "dropdown",
        options: { haredi: "haredi", secular: "secular", religious: "religious" },
      },
      free: {
        name: "free", // Enclose 'free' in quotes
        label: "free", // Enclose 'free' in quotes
        type: "checkbox",
        value: false,
        isrequired: true
      },
    },


    data: [
      {
        id: 1,
        title: "Doctor",
        content: "doctor in north/south",
        free: true,
        area: ["north", "south"],
        age_groups: ["under_18", "25-34"],
        status: ["student"],
        population: ["haredi", "secular"],
      },
      {
        id: 2,
        title: "Nurse",
        content: "nurse in north/south",
        free: true,
        area: ["north", "south"],
        age_groups: ["18-24", "35-44"],
        status: ["citizen"],
        population: ["haredi", "religious"],
      },
      {
        id: 3,
        title: "Teacher",
        content: "teacher in north/south",
        free: false,
        area: ["north", "south"],
        age_groups: ["25-34", "35-44"],
        status: ["solider"],
        population: ["secular", "religious"],
      },
      {
        id: 4,
        title: "Soldier",
        content: "soldier in north/south",
        free: false,
        area: ["north", "south"],
        age_groups: ["18-24", "25-34"],
        status: ["student"],
        population: ["haredi", "religious"],
      },
    ],
  };
  const FILTER_TYPES = {
    search: '',
    dropdown: [],
    MC_dropdown: [],
    checkbox: false,
  };
  

  let data = USER_DATA.data;
  filter_ids=[3,1]

  let filtered=data.filter((item) => filter_ids.includes(item.id))
filtered
  

    // filterLogicModel/createFilterConfig.jsx 
    function createFilterConfig(filterTypes, userFilters) {
      let filterConfig = {};
    
      // Iterate over each filter in userFilters
      for (const filterKey in userFilters) {
        if (userFilters.hasOwnProperty(filterKey)) {
          const filter = userFilters[filterKey];
    
          // Initialize the filter in filterConfig based on its type
          filterConfig[filter.name] = filterTypes[filter.type];
        }
      }
    
      return filterConfig;
    }
    
  
  const config=createFilterConfig(FILTER_TYPES,USER_DATA.config)
  console.log(config)
  

  const filterData = (data, selectedFilters) => {
    return data.filter(item => {
      // Check for each filter
      for (const [filterKey, filterValue] of Object.entries(selectedFilters)) {
        // Skip empty filters
        if (!filterValue || (Array.isArray(filterValue) && filterValue.length === 0)) continue;
    
        // Handling for array filters (e.g., 'area', 'age_groups', 'status')
        else if (Array.isArray(filterValue)) {
          if (!item[filterKey] || !filterValue.some(val => item[filterKey].includes(val))) {
            return false;
          }
        }
  
        // Handling for string filters (e.g., 'population')
        else if (typeof filterValue === 'string' || typeof filterValue === 'boolean') {
          if (item[filterKey] !== filterValue) {
            return false;
          }
        }
      }
  
      // If all filters are passed
      return true;
    });
  };
  
  // Example usage
  const DATA = [
        {
          id: 1,
          title: "Doctor",
          content: "doctor in north/south",
          free: true,
          area: ["north", "south"],
          age_groups: ["under_18", "25-34"],
          status: ["student"],
          population: ["haredi", "secular"],
        },
        {
          id: 2,
          title: "Nurse",
          content: "nurse in north/south",
          free: true,
          area: ["north", "south"],
          age_groups: ["18-24", "35-44"],
          status: ["citizen"],
          population: ["haredi", "religious"],
        },
        {
          id: 3,
          title: "Teacher",
          content: "teacher in north/south",
          free: false,
          area: ["north", "south"],
          age_groups: ["25-34", "35-44"],
          status: ["solider"],
          population: ["secular", "religious"],
        },
        {
          id: 4,
          title: "Soldier",
          content: "soldier in north/south",
          free: false,
          area: ["north", "south"],
          age_groups: ["18-24", "25-34"],
          status: ["student"],
          population: ["haredi", "religious"],
        }
  ];
  
  const selectedFilters = { "area": [ "north" ], "age_groups": [], "status": [], "population": "", "free": false };
  const filteredData = filterData(DATA, selectedFilters);
  console.log(filteredData);
  