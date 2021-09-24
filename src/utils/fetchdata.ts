export async function fetchData() {
    const requestOptions = {
        method: 'GET',
      };
    const data = await fetch("https://data.covid19india.org/data.json",requestOptions)
    const jsonData = await data.json();
    const timeSeries = jsonData['cases_time_series'];
    const finalTableData = [...timeSeries, ...timeSeries, ...timeSeries, ...timeSeries];
    return finalTableData;
}