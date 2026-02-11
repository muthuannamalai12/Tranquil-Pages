import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
// import { Metrics } from '@newrelic/browser-agent/features/metrics'
import { Logging } from '@newrelic/browser-agent/features/logging';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Populate using values in copy-paste JavaScript snippet.
const options = {
    init: {session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,mask_input_options:{}},distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}, // NREUM.init
    info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRBR-831606d506bdf5cdc0b",applicationID:"601539290",sa:1}, // NREUM.info
    loader_config: {accountID:"1",trustKey:"1",agentID:"601539290",licenseKey:"NRBR-831606d506bdf5cdc0b",applicationID:"601539290"}, // NREUM.loader_config
  }
  
  // Before settin setUserId Or Logging 
  // new BrowserAgent(options)

  // To test nmp browser agent without adding features array
  // const newrelic = new BrowserAgent(options)

  // Modification to add the userId
//   const browserAgent = new BrowserAgent({
//   ...options,
//   features: [
//     Metrics
//   ]
// })

  // Modification to add the Logging
  const newrelic = new BrowserAgent({
  ...options,
  features: [
    Logging
  ]
})

// Set the userId for the browser agent
// browserAgent.setUserId('user-1234-v1.0')

// const row = {
//   jobId: 'JOB-777-ABC',
//   id: 'QUOTE-999-XYZ'
// }

// if (typeof newrelic !== 'undefined' && newrelic.log) {
//     console.log('QuotesTable: newrelic.log is valid'); 
    
//     newrelic.log(
//         'DEV, QuotesTable, onButtonClick, Browser Agent v1.308 npm package approach',
//         {
//             // This "tricks" TypeScript into allowing lowercase
//             level: 'warn' as any,
//             customAttributes: {
//                 entityId: `jobID: ${row.jobId}, id: ${row.id}`,
//             },
//         }
//     );
// }

createRoot(document.getElementById("root")!).render(<App />);




