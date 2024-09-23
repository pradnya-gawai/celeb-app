export const fetchData = async (setCelebList,setFilteredCelebList) => {
    try {
      const response = await fetch("celebrities.json");
      // Check if response is ok (status in range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json(); 
      localStorage.setItem('userData', JSON.stringify(result));
      // This should only happen once
      setCelebList(result);
      setFilteredCelebList(result)
    } catch (error) {

      console.error(error.message); // Capture and set the error message
    }
  };

  export function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return `${age} Years`;
}

