import React from 'react'

const temp = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>Department of Information Technology</h2>
      <h4 className='text-center'>Class time table for the AY 2024-25</h4>
      <h5 className='text-center'>Class BE V Sem IT-1</h5>
      <h6 className='text-center'>Room No:L-205</h6>
      <h6 className='text-center'>W.E.F. :30/07/2024</h6>

      <table className='table table-bordered border border-3 border-dark'>
        <thead>
          <tr>
            <th rowSpan="2" className='border border-3 border-dark'>Period</th>
            <th className='border border-3 border-dark'>I</th>
            <th className='border border-3 border-dark'>II</th>
            <th className='border border-3 border-dark'>III</th>
            <th className='border-none lunch-break' rowSpan="6">12:15 to 1:00PM</th>
            <th className='border border-3 border-dark'>IV</th>
            <th className='border border-3 border-dark'>V</th>
            <th className='border border-3 border-dark'>VI</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <th className='border border-3 border-dark'>Day/Time</th>
            <th className='border border-3 border-dark'>(9:10 - 10:10AM)</th>
            <th className='border border-3 border-dark'>(10:10 - 11:10AM)</th>
            <th className='border border-3 border-dark'>(11:15 - 12:15PM)</th>
            <th className='align-middle text-center' rowSpan={6}><span style={{color:"red",fontSize:'25px',writingMode: "vertical-rl", transform: "rotate(360deg)"}}>Lunch Break</span></th>
            <th className='border border-3 border-dark'>(01:00 - 02:00PM)</th>
            <th className='border border-3 border-dark'>(02:00 - 03:00PM)</th>
            <th className='border border-3 border-dark'>(03:05 - 04:05PM)</th>
          </tr>
          <tr>
            <th className='border border-3 border-dark'>Monday</th>
            <th className='border border-3 border-dark' colSpan={2}>CT Lab (B1) / ML Lab (B2)</th>
            <th className='border border-3 border-dark'>PE-2</th>
            <th className='border border-3 border-dark'>CN</th>
            <th className='border border-3 border-dark'>SE</th>
            <th className='border border-3 border-dark'>EAD</th>
          </tr>
          <tr>
          <th className='border border-3 border-dark'>Tuesday</th>
          <th className='border border-3 border-dark'>PE-2</th>
          <th className='border border-3 border-dark'>ML</th>
          <th className='border border-3 border-dark'>EAD</th>
          <th className='border border-3 border-dark'>SE</th>
          <th className='border border-3 border-dark' colSpan={2}>CN Lab (B1) / EAD Lab (B2) </th>
          </tr>
          <tr>
            <th className='border border-3 border-black'>Wednesday</th>
            <th className='border border-3 border-black'>CN</th>
            <th className='border border-3 border-black'>EAD</th>
            <th className='border border-3 border-black'>FLAT</th>
            <th className='border border-3 border-black'>ML</th>
            <th className='border border-3 border-black' colSpan={2}>(CC (B1) ) / Library & Sports (B2)</th>            
          </tr>
          <tr>
            <th className="border border-3 border-dark">Thursday</th>
            <td className="border border-3 border-dark">ML</td>
            <td className="border border-3 border-dark">CN</td>
            <td className="border border-3 border-dark">CT Lab (B2) / ML Lab (B1)</td>
            <td className="border border-3 border-dark">ML (B1) & CT (B2) </td>
            <td className="border border-3 border-dark">FLAT</td>
            <td className="border border-3 border-dark">SE</td>
          </tr>
          <tr>
            <th className="border border-3 border-dark">Friday</th>
            <td className="border border-3 border-dark" colSpan={2}>CN Lab (B2) / EAD Lab (B1)</td>
            <td className="border border-3 border-dark">PE-2</td>
            <td className="border border-3 border-dark">FLAT</td>
            <td className="border border-3 border-dark">SE</td>
            <td className="border border-3 border-dark">Library & Sports (B1)</td>
          </tr>
          <tr>
            <th className="border border-3 border-dark">Saturday</th>
            <td className="border border-3 border-dark">MENTORING</td>
            <td className="border border-3 border-dark"></td>
            <td className="border border-3 border-dark"></td>
            <td className="border border-3 border-dark"></td>
            <td className="border border-3 border-dark"></td>
            <td className="border border-3 border-dark"></td>
            <td className="border border-3 border-dark"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default temp
