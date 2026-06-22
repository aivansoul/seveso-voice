"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{2660:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},9322:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},9985:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]])},1817:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},730:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]])},8662:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]])},7133:function(e,t,n){n.d(t,{Z:function(){return o}});let o=(0,n(9205).Z)("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]])},9376:function(e,t,n){var o=n(5475);n.o(o,"useSearchParams")&&n.d(t,{useSearchParams:function(){return o.useSearchParams}})},7765:function(e,t,n){let o,a;function i(e){return null!=e&&"object"==typeof e&&!Array.isArray(e)}async function s(e){try{let t=await e.json();if(!i(t))return e.statusText||"Unknown error";let n=t.detail,o=i(n)?n.message:n;if("string"==typeof o)return o}catch(e){console.warn("Failed to parse API error response as JSON:",e)}return e.statusText||"Unknown error"}n.d(t,{hc:function(){return ew},sX:function(){return e_}});class r extends Error{closeCode;closeReason;constructor(e,t){super(e),this.name="SessionConnectionError",this.closeCode=t?.closeCode,this.closeReason=t?.closeReason}}let l=["onConnect","onDisconnect","onError","onMessage","onAudio","onModeChange","onStatusChange","onCanSendFeedbackChange","onUnhandledClientToolCall","onVadScore","onMCPToolCall","onMCPConnectionStatus","onAgentToolRequest","onAgentToolResponse","onConversationMetadata","onAsrInitiationMetadata","onInterruption","onAgentResponseCorrection","onAgentChatResponsePart","onAudioAlignment","onGuardrailTriggered","onAgentTyping","onExternalAgentConnected","onDebug"],c={reason:"agent",context:{type:"end_call",reason:"Agent ended the call"}};function u(e){let{textOnly:t}=e.overrides?.conversation??{},{textOnly:n}=e;return"boolean"==typeof n?("boolean"==typeof t&&n!==t&&console.warn(`Conflicting textOnly options provided: ${n} via options.textOnly (will be used) and ${t} via options.overrides.conversation.textOnly (will be ignored)`),n):"boolean"==typeof t?t:void 0}class d{options;connection;lastInterruptTimestamp=0;mode="listening";status="connecting";volume=1;currentEventId=1;lastFeedbackEventId=0;canSendFeedback=!1;static getFullOptions(e){let t=u(e);return{clientTools:{},onConnect:()=>{},onDebug:()=>{},onDisconnect:()=>{},onError:()=>{},onMessage:()=>{},onAudio:()=>{},onModeChange:()=>{},onStatusChange:()=>{},onCanSendFeedbackChange:()=>{},onInterruption:()=>{},onAgentResponseCorrection:()=>{},onAgentTyping:()=>{},onExternalAgentConnected:()=>{},...e,textOnly:t,overrides:{...e.overrides,conversation:{...e.overrides?.conversation,textOnly:t}}}}constructor(e,t){this.options=e,this.connection=t,this.connection.onMessage(this.onMessage),this.connection.onDisconnect(this.endSessionWithDetails),this.connection.onModeChange(e=>this.updateMode(e))}markConnected(){this.updateStatus("connected")}endSession(){return this.endSessionWithDetails({reason:"user"})}endSessionWithDetails=async e=>{("connected"===this.status||"connecting"===this.status)&&(this.updateStatus("disconnecting"),await this.handleEndSession(),this.updateStatus("disconnected"),this.options.onDisconnect&&this.options.onDisconnect(e))};async handleEndSession(){this.connection.close()}updateMode(e){e!==this.mode&&(this.mode=e,this.options.onModeChange&&this.options.onModeChange({mode:e}))}updateStatus(e){e!==this.status&&(this.status=e,this.options.onStatusChange&&this.options.onStatusChange({status:e}))}updateCanSendFeedback(){let e=this.currentEventId!==this.lastFeedbackEventId;this.canSendFeedback!==e&&(this.canSendFeedback=e,this.options.onCanSendFeedbackChange&&this.options.onCanSendFeedbackChange({canSendFeedback:e}))}handleInterruption(e){e.interruption_event&&(this.lastInterruptTimestamp=e.interruption_event.event_id,this.options.onInterruption&&this.options.onInterruption({event_id:e.interruption_event.event_id}))}handleAgentResponse(e){this.options.onMessage&&this.options.onMessage({source:"ai",role:"agent",message:e.agent_response_event.agent_response,event_id:e.agent_response_event.event_id})}handleAgentResponseCorrection(e){this.options.onAgentResponseCorrection&&this.options.onAgentResponseCorrection(e.agent_response_correction_event)}handleUserTranscript(e){this.options.onMessage&&this.options.onMessage({source:"user",role:"user",message:e.user_transcription_event.user_transcript,event_id:e.user_transcription_event.event_id})}handleTentativeAgentResponse(e){this.options.onDebug&&this.options.onDebug({type:"tentative_agent_response",response:e.tentative_agent_response_internal_event.tentative_agent_response})}handleVadScore(e){this.options.onVadScore&&this.options.onVadScore({vadScore:e.vad_score_event.vad_score})}async handleClientToolCall(e){if(Object.prototype.hasOwnProperty.call(this.options.clientTools,e.client_tool_call.tool_name))try{let t=await this.options.clientTools[e.client_tool_call.tool_name](e.client_tool_call.parameters)??"Client tool execution successful.",n="object"==typeof t?JSON.stringify(t):String(t);this.connection.sendMessage({type:"client_tool_result",tool_call_id:e.client_tool_call.tool_call_id,result:n,is_error:!1})}catch(t){this.onError(`Client tool execution failed with following error: ${t?.message}`,{clientToolName:e.client_tool_call.tool_name}),this.connection.sendMessage({type:"client_tool_result",tool_call_id:e.client_tool_call.tool_call_id,result:`Client tool execution failed: ${t?.message}`,is_error:!0})}else{if(this.options.onUnhandledClientToolCall){this.options.onUnhandledClientToolCall(e.client_tool_call);return}this.onError(`Client tool with name ${e.client_tool_call.tool_name} is not defined on client`,{clientToolName:e.client_tool_call.tool_name}),this.connection.sendMessage({type:"client_tool_result",tool_call_id:e.client_tool_call.tool_call_id,result:`Client tool with name ${e.client_tool_call.tool_name} is not defined on client`,is_error:!0})}}handleAudio(e){}handleMCPToolCall(e){this.options.onMCPToolCall&&this.options.onMCPToolCall(e.mcp_tool_call)}handleMCPConnectionStatus(e){this.options.onMCPConnectionStatus&&this.options.onMCPConnectionStatus(e.mcp_connection_status)}handleAgentToolRequest(e){this.options.onAgentToolRequest&&this.options.onAgentToolRequest(e.agent_tool_request)}handleAgentToolResponse(e){"end_call"===e.agent_tool_response.tool_name&&this.endSessionWithDetails(c).catch(e=>{this.onError("Failed to end session after agent end_call",e)}),this.options.onAgentToolResponse?.(e.agent_tool_response)}handleAgentToolResponseFullPayload(e){"end_call"===e.agent_tool_response_full_payload.tool_name&&this.endSessionWithDetails(c).catch(e=>{this.onError("Failed to end session after agent end_call",e)}),this.options.onAgentToolResponse?.(e.agent_tool_response_full_payload)}handleConversationMetadata(e){this.options.onConversationMetadata&&this.options.onConversationMetadata(e.conversation_initiation_metadata_event)}handleAsrInitiationMetadata(e){this.options.onAsrInitiationMetadata&&this.options.onAsrInitiationMetadata(e.asr_initiation_metadata_event)}handleAgentChatResponsePart(e){this.options.onAgentChatResponsePart&&this.options.onAgentChatResponsePart(e.text_response_part)}handleGuardrailTriggered(e){this.options.onGuardrailTriggered&&this.options.onGuardrailTriggered()}handleAgentTyping(e){this.options.onAgentTyping&&this.options.onAgentTyping(e.agent_typing_event)}handleExternalAgentConnected(e){this.options.onExternalAgentConnected&&this.options.onExternalAgentConnected()}handleErrorEvent(e){let t=e.error_event.error_type,n=e.error_event.message||e.error_event.reason||"Unknown error";if("max_duration_exceeded"===t){this.endSessionWithDetails({reason:"error",message:n,context:{type:"max_duration_exceeded"}}).catch(e=>{this.onError("Failed to end session after max_duration_exceeded",e)});return}this.onError(`Server error: ${n}`,{errorType:t,code:e.error_event.code,debugMessage:e.error_event.debug_message,details:e.error_event.details})}onMessage=async e=>{switch(e.type){case"interruption":this.handleInterruption(e);return;case"agent_response":this.handleAgentResponse(e);return;case"agent_response_correction":this.handleAgentResponseCorrection(e);return;case"user_transcript":this.handleUserTranscript(e);return;case"internal_tentative_agent_response":this.handleTentativeAgentResponse(e);return;case"client_tool_call":try{await this.handleClientToolCall(e)}catch(t){this.onError(`Unexpected error in client tool call handling: ${t instanceof Error?t.message:String(t)}`,{clientToolName:e.client_tool_call.tool_name,toolCallId:e.client_tool_call.tool_call_id})}return;case"audio":this.handleAudio(e);return;case"vad_score":this.handleVadScore(e);return;case"ping":this.connection.sendMessage({type:"pong",event_id:e.ping_event.event_id});return;case"mcp_tool_call":this.handleMCPToolCall(e);return;case"mcp_connection_status":this.handleMCPConnectionStatus(e);return;case"agent_tool_request":this.handleAgentToolRequest(e);return;case"agent_tool_response":this.handleAgentToolResponse(e);return;case"agent_tool_response_full_payload":this.handleAgentToolResponseFullPayload(e);return;case"conversation_initiation_metadata":this.handleConversationMetadata(e);return;case"asr_initiation_metadata":this.handleAsrInitiationMetadata(e);return;case"agent_chat_response_part":this.handleAgentChatResponsePart(e);return;case"guardrail_triggered":this.handleGuardrailTriggered(e);return;case"error":this.handleErrorEvent(e);return;case"agent_typing":this.handleAgentTyping(e);return;case"external_agent_connected":this.handleExternalAgentConnected(e);return;default:this.options.onDebug&&this.options.onDebug(e);return}};onError(e,t){console.error(e,t),this.options.onError&&this.options.onError(e,t)}getId(){return this.connection.conversationId}isOpen(){return"connected"===this.status}sendFeedback(e){if(!this.canSendFeedback){console.warn(0===this.lastFeedbackEventId?"Cannot send feedback: the conversation has not started yet.":"Cannot send feedback: feedback has already been sent for the current response.");return}this.connection.sendMessage({type:"feedback",score:e?"like":"dislike",event_id:this.currentEventId}),this.lastFeedbackEventId=this.currentEventId,this.updateCanSendFeedback()}sendContextualUpdate(e,t){this.connection.sendMessage({type:"contextual_update",text:e,...t?.contextId?{context_id:t.contextId}:{}})}sendUserMessage(e){this.connection.sendMessage({type:"user_message",text:e})}sendUserActivity(){this.connection.sendMessage({type:"user_activity"})}sendMCPToolApprovalResult(e,t){this.connection.sendMessage({type:"mcp_tool_approval_result",tool_call_id:e,is_approved:t})}sendMultimodalMessage(e){this.connection.sendMessage({type:"multimodal_message",text:e.text?{type:"user_message",text:e.text}:void 0,file:e.fileId?{type:"file_input",file_id:e.fileId}:void 0})}async uploadFile(e){let t=(this.options.origin??"https://api.elevenlabs.io").replace(/^wss:\/\//,"https://").replace(/^ws:\/\//,"http://"),n="name"in e&&"string"==typeof e.name?e.name:`upload.${(e.type||"image/png").split("/").pop()?.split("+")[0]}`,o=new FormData;o.append("file",e,n);let a=await fetch(`${t}/v1/convai/conversations/${this.connection.conversationId}/files`,{method:"POST",body:o});if(!a.ok){let e=await s(a);throw Error(`Upload failed: ${a.status} ${e}`)}let r=await a.json();!function(e,t="Expected a JSON object"){if(!i(e))throw Error(t)}(r,"Upload response is not a JSON object");let{file_id:l}=r;if("string"!=typeof l||!l)throw Error("Upload response is missing a valid file_id");return{fileId:l}}}let h=Object.freeze({name:"js_sdk",version:"1.12.0"});class p{queue=[];disconnectionDetails=null;onDisconnectCallback=null;onMessageCallback=null;onModeChangeCallback=null;onDebug;constructor(e={}){this.onDebug=e.onDebug}debug(e){this.onDebug&&this.onDebug(e)}onMessage(e){this.onMessageCallback=e;let t=this.queue;this.queue=[],t.length>0&&queueMicrotask(()=>{t.forEach(e)})}onDisconnect(e){this.onDisconnectCallback=e;let t=this.disconnectionDetails;t&&queueMicrotask(()=>{e(t)})}onModeChange(e){this.onModeChangeCallback=e}updateMode(e){this.onModeChangeCallback?.(e)}disconnect(e){this.disconnectionDetails||(this.disconnectionDetails=e,this.onDisconnectCallback?.(e))}handleMessage(e){this.onMessageCallback?this.onMessageCallback(e):this.queue.push(e)}}function m(e){let[t,n]=e.split("_");if(!["pcm","ulaw"].includes(t))throw Error(`Invalid format: ${e}`);let o=Number.parseInt(n);if(Number.isNaN(o))throw Error(`Invalid sample rate: ${n}`);return{format:t,sampleRate:o}}var f,g,v,y,C,w,_=n(3819);let b="conversation_initiation_client_data";function k(e){let t={type:b};return e.overrides&&(t.conversation_config_override={agent:{prompt:e.overrides.agent?.prompt,first_message:e.overrides.agent?.firstMessage,language:e.overrides.agent?.language},tts:{voice_id:e.overrides.tts?.voiceId,speed:e.overrides.tts?.speed,stability:e.overrides.tts?.stability,similarity_boost:e.overrides.tts?.similarityBoost},...e.overrides.asr?.keywords!==void 0?{asr:{keywords:e.overrides.asr.keywords}}:{},conversation:{text_only:e.overrides.conversation?.textOnly}}),e.customLlmExtraBody&&(t.custom_llm_extra_body=e.customLlmExtraBody),e.dynamicVariables&&(t.dynamic_variables=e.dynamicVariables),e.userId&&(t.user_id=e.userId),t.source_info={source:h.name,version:h.version},e.toolMockConfig&&(t.tool_mock_config={mocking_strategy:e.toolMockConfig.mockingStrategy,mocked_tool_names:e.toolMockConfig.mockedToolNames,fallback_strategy:e.toolMockConfig.fallbackStrategy}),t}function S(e){return btoa(String.fromCharCode(...new Uint8Array(e)))}let A={getVolume:()=>0,getByteFrequencyData:()=>{}};function E(e,t,n){let o=e.length,a=n/2/o,i=Math.floor(100/a),s=Math.min(Math.ceil(8e3/a),o),r=s-i,l=t.length;for(let n=0;n<l;n++){let o=n/l*r,a=i+Math.floor(o),c=Math.min(a+1,s-1),u=o-Math.floor(o);t[n]=Math.round(e[a]*(1-u)+e[c]*u)}}class M extends p{conversationId;inputFormat;outputFormat;room;isConnected=!1;audioEventId=1;outputDeviceId=null;audioAdapter;inputAnalyser=void 0;inputVolumeProvider=A;outputAnalyser=void 0;outputVolumeProvider=A;_isMuted=!1;input={close:async()=>{if(this.isConnected)try{this.room.localParticipant.audioTrackPublications.forEach(e=>{e.track&&e.track.stop()})}catch(e){console.warn("Error stopping local tracks:",e)}},setDevice:async e=>{if(e?.sampleRate!==void 0||e?.format!==void 0||e?.preferHeadphonesForIosDevices!==void 0)throw Error("WebRTC input device does not support sampleRate, format, or preferHeadphonesForIosDevices options");let t=e?.inputDeviceId;t&&await this.setAudioInputDevice(t)},setMuted:async e=>{if(!this.isConnected||!this.room.localParticipant){console.warn("Cannot set microphone muted: room not connected or no local participant");return}this._isMuted=e;let t=this.room.localParticipant.getTrackPublication(_.fQ.Source.Microphone);if(t?.track)try{e?await t.track.mute():await t.track.unmute()}catch(t){await this.room.localParticipant.setMicrophoneEnabled(!e)}else await this.room.localParticipant.setMicrophoneEnabled(!e);if(!e){let e=this.room.localParticipant.getTrackPublication(_.fQ.Source.Microphone)?.track;e&&this.setupInputAnalyser(e.mediaStreamTrack)}},isMuted:()=>this._isMuted,getAnalyser:()=>this.inputAnalyser,getVolume:()=>this._isMuted?0:this.inputVolumeProvider.getVolume(),getByteFrequencyData:e=>{if(this._isMuted){e.fill(0);return}this.inputVolumeProvider.getByteFrequencyData(e)}};output={close:async()=>{},setDevice:async e=>{if(e?.sampleRate!==void 0||e?.format!==void 0)throw Error("WebRTC output device does not support sampleRate or format options");let t=e?.outputDeviceId;t&&await this.setAudioOutputDevice(t)},setVolume:e=>{this.setAudioVolume(e)},interrupt:e=>{},getAnalyser:()=>this.outputAnalyser,getVolume:()=>this.outputVolumeProvider.getVolume(),getByteFrequencyData:e=>{this.outputVolumeProvider.getByteFrequencyData(e)}};constructor(e,t,n,a,i={}){super(i),this.room=e,this.conversationId=t,this.inputFormat=n,this.outputFormat=a,this.audioAdapter=o?.()??null,this.setupRoomEventListeners()}static async create(e){let t;if("conversationToken"in e&&e.conversationToken)t=e.conversationToken;else if("agentId"in e&&e.agentId)try{let{name:n,version:o}=h,a=(e.origin??"https://api.elevenlabs.io").replace(/^wss:\/\//,"https://"),r=`${a}/v1/convai/conversation/token?agent_id=${e.agentId}&source=${n}&version=${o}`;e.environment&&(r+=`&environment=${encodeURIComponent(e.environment)}`);let l=await fetch(r);if(!l.ok){let e=await s(l);throw Error(`ElevenLabs API returned ${l.status} ${e}`)}let c=await l.json();if(!i(c)||"string"!=typeof c.token||!(t=c.token))throw Error("No conversation token received from API")}catch(n){let t=n instanceof Error?n.message:String(n);throw n instanceof Error&&n.message.includes("401")&&(t="Your agent has authentication enabled, but no signed URL or conversation token was provided."),Error(`Failed to fetch conversation token for agent ${e.agentId}: ${t}`)}else throw Error("Either conversationToken or agentId is required for WebRTC connection");let n=new _.du({singlePeerConnection:!1});try{let o=`room_${Date.now()}`,a=m("pcm_48000"),i=m("pcm_48000"),s=new M(n,o,a,i,e),r=e.livekitUrl||"wss://livekit.rtc.elevenlabs.io",l=e.textOnly?Promise.resolve():new Promise((e,t)=>{n.once(_.TQ.SignalConnected,()=>{n.localParticipant.setMicrophoneEnabled(!0).then(()=>e()).catch(t)})});await n.connect(r,t),await new Promise(e=>{if(s.isConnected)e();else{let t=()=>{n.off(_.TQ.Connected,t),e()};n.on(_.TQ.Connected,t)}}),await l;let c=n.localParticipant.getTrackPublication(_.fQ.Source.Microphone)?.track;c&&s.setupInputAnalyser(c.mediaStreamTrack),n.name&&(s.conversationId=n.name.match(/(conv_[a-zA-Z0-9]+)/)?.[0]||n.name);let u=k(e);return s.debug({type:b,message:u}),await s.sendMessage(u),s}catch(e){throw await n.disconnect(),e}}setupRoomEventListeners(){this.room.on(_.TQ.Connected,()=>{this.isConnected=!0}),this.room.on(_.TQ.Disconnected,e=>{this.isConnected=!1,this.disconnect({reason:"agent",context:{type:"close",reason:e?.toString()}})}),this.room.on(_.TQ.ConnectionStateChanged,e=>{e===_.em.Disconnected&&(this.isConnected=!1,this.disconnect({reason:"error",message:`LiveKit connection state changed to ${e}`,context:{type:"connection_state_changed"}}))}),this.room.on(_.TQ.DataReceived,(e,t)=>{try{let t=JSON.parse(new TextDecoder().decode(e));if("audio"===t.type)return;t.type?this.handleMessage(t):console.warn("Invalid socket event received:",t)}catch(t){console.warn("Failed to parse incoming data message:",t),console.warn("Raw payload:",new TextDecoder().decode(e))}}),this.room.on(_.TQ.TrackSubscribed,async(e,t,n)=>{e.kind===_.fQ.Kind.Audio&&n.identity.includes("agent")&&this.audioAdapter&&(await this.audioAdapter.attachRemoteTrack(e,this.outputDeviceId),await this.setupAudioCapture(e),this.onDebug?.({type:"audio_element_ready"}))}),this.room.on(_.TQ.ActiveSpeakersChanged,async e=>{e.length>0?this.updateMode(e[0].identity.startsWith("agent")?"speaking":"listening"):this.updateMode("listening")}),this.room.on(_.TQ.ParticipantDisconnected,e=>{e.identity?.startsWith("agent")&&this.disconnect({reason:"agent",context:{type:"close",reason:"agent disconnected"}})})}close(){if(this.isConnected){try{this.room.localParticipant.audioTrackPublications.forEach(e=>{e.track&&e.track.stop()})}catch(e){console.warn("Error stopping local tracks:",e)}this.audioAdapter?.cleanup(),this.inputAnalyser=void 0,this.outputAnalyser=void 0,this.inputVolumeProvider=A,this.outputVolumeProvider=A,this.room.disconnect()}}async sendMessage(e){if(!this.isConnected||!this.room.localParticipant){console.warn("Cannot send message: room not connected or no local participant");return}if(!("user_audio_chunk"in e))try{let t=new TextEncoder().encode(JSON.stringify(e));await this.room.localParticipant.publishData(t,{reliable:!0})}catch(t){this.debug({type:"send_message_error",message:{message:e,error:t}}),console.error("Failed to send message via WebRTC:",t)}}getRoom(){return this.room}setupInputAnalyser(e){if(this.audioAdapter)try{let t=this.audioAdapter.setupInputAnalysis(e);this.inputVolumeProvider=t.volumeProvider,this.inputAnalyser=t.analyser}catch(e){console.warn("[ConversationalAI] Failed to set up input volume analyser:",e)}}setInputVolumeProvider(e){this.inputVolumeProvider=e}setOutputVolumeProvider(e){this.outputVolumeProvider=e}async setupAudioCapture(e){if(this.audioAdapter)try{let t=await this.audioAdapter.setupOutputAnalysis(e,this.outputFormat,(e,t)=>{if(t>.01){let t=S(e),n=this.audioEventId++;this.handleMessage({type:"audio",audio_event:{audio_base_64:t,event_id:n}})}});this.outputVolumeProvider=t.volumeProvider,this.outputAnalyser=t.analyser}catch(e){console.warn("Failed to set up audio capture:",e)}}setAudioVolume(e){this.audioAdapter?.setVolume(e)}async setAudioOutputDevice(e){if(!this.audioAdapter)throw Error("Cannot set output device: no audio adapter available on this platform");await this.audioAdapter.setOutputDevice(e),this.outputDeviceId=e}async setAudioInputDevice(e){if(!this.isConnected||!this.room.localParticipant)throw Error("Cannot change input device: room not connected or no local participant");try{let t=this.room.localParticipant.getTrackPublication(_.fQ.Source.Microphone);t?.track&&(await t.track.stop(),await this.room.localParticipant.unpublishTrack(t.track));let n=await (0,_.s1)({deviceId:{exact:e},echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:{ideal:1}});await this.room.localParticipant.publishTrack(n,{name:"microphone",source:_.fQ.Source.Microphone}),this.setupInputAnalyser(n.mediaStreamTrack)}catch(e){console.error("Failed to change input device:",e);try{await this.room.localParticipant.setMicrophoneEnabled(!0)}catch(e){console.error("Failed to recover microphone after device switch error:",e)}throw e}}}class T extends p{socket;conversationId;inputFormat;outputFormat;outputListeners=new Set;pendingAudioEvents=[];constructor(e,t,n,o){super(),this.socket=e,this.conversationId=t,this.inputFormat=n,this.outputFormat=o,this.socket.addEventListener("error",e=>{setTimeout(()=>this.disconnect({reason:"error",message:"The connection was closed due to a socket error.",context:{type:e.type}}),0)}),this.socket.addEventListener("close",e=>{let t=e.code,n=e.reason||void 0,o={type:e.type,code:t,reason:n};this.disconnect(1e3===t?{reason:"agent",context:o,closeCode:t,closeReason:n}:{reason:"error",message:n||"The connection was closed by the server.",context:o,closeCode:t,closeReason:n})}),this.socket.addEventListener("message",e=>{try{let t=JSON.parse(e.data);if(!t.type){this.debug({type:"invalid_event",message:"Received invalid socket event",data:e.data});return}this.handleMessage(t)}catch(t){this.debug({type:"parsing_error",message:"Failed to parse socket message",error:t instanceof Error?t.message:String(t),data:e.data})}})}static async create(e){let t=null;try{let n;let o=e.origin??"wss://api.elevenlabs.io",{name:a,version:i}=h;if(e.signedUrl){let t=e.signedUrl.includes("?")?"&":"?";n=`${e.signedUrl}${t}source=${a}&version=${i}`}else n=`${o}/v1/convai/conversation?agent_id=${e.agentId}&source=${a}&version=${i}`;e.environment&&(n+=`&environment=${encodeURIComponent(e.environment)}`);let s=["convai"];e.authorization&&s.push(`bearer.${e.authorization}`),t=new WebSocket(n,s);let{conversation_id:l,agent_output_audio_format:c,user_input_audio_format:u}=await new Promise((n,o)=>{t.addEventListener("open",()=>{let n=k(e);t?.send(JSON.stringify(n))},{once:!0}),t.addEventListener("error",e=>{setTimeout(()=>o(new r("The connection was closed due to a socket error.")),0)}),t.addEventListener("close",e=>{let t=e.reason||(1e3===e.code?"Connection closed normally before session could be established.":"Connection closed unexpectedly before session could be established.");o(new r(t,{closeCode:e.code,closeReason:e.reason||void 0}))}),t.addEventListener("message",e=>{let t=JSON.parse(e.data);t.type&&("conversation_initiation_metadata"===t.type?n(t.conversation_initiation_metadata_event):console.warn("First received message is not conversation metadata."))},{once:!0})}),d=m(u??"pcm_16000"),p=m(c);return new T(t,l,d,p)}catch(e){throw t?.close(),e}}close(){this.pendingAudioEvents=[],this.socket.close(1e3,"User ended conversation")}sendMessage(e){this.socket.send(JSON.stringify(e))}addListener(e){let t=this.outputListeners.size>0;if(this.outputListeners.add(e),t||0===this.pendingAudioEvents.length)return;let n=this.pendingAudioEvents;for(let t of(this.pendingAudioEvents=[],n))e(t)}removeListener(e){this.outputListeners.delete(e)}handleMessage(e){if(super.handleMessage(e),"audio"===e.type&&e.audio_event.audio_base_64){let t={audio_base_64:e.audio_event.audio_base_64};if(0===this.outputListeners.size){this.pendingAudioEvents.push(t);return}this.outputListeners.forEach(e=>e(t))}}}async function x(e){let t=function(e){let t="signedUrl"in e&&e.signedUrl;if(t&&"webrtc"===e.connectionType)throw Error("signedUrl only supports websocket connections. Remove connectionType or set it to 'websocket'.");return e.connectionType?e.connectionType:"conversationToken"in e&&e.conversationToken?"webrtc":t?"websocket":e.textOnly?"websocket":"webrtc"}(e);switch(t){case"websocket":return T.create(e);case"webrtc":return M.create(e);default:throw Error(`Unknown connection type: ${t}`)}}let I=new Map;function D(e,t){return async(n,o)=>{let a=I.get(e);if(a)return n.addModule(a);if(o)try{await n.addModule(o),I.set(e,o);return}catch(t){throw Error(`Failed to load the ${e} worklet module from path: ${o}. Error: ${t}`)}let i=new Blob([t],{type:"application/javascript"}),s=URL.createObjectURL(i);try{await n.addModule(s),I.set(e,s);return}catch{URL.revokeObjectURL(s)}try{let o=btoa(t),a=`data:application/javascript;base64,${o}`;await n.addModule(a),I.set(e,a)}catch(t){throw Error(`Failed to load the ${e} worklet module. Make sure the browser supports AudioWorklets. If you are using a strict CSP, you may need to self-host the worklet files.`)}}}let P=D("audioConcatProcessor",`/*
 * ulaw decoding logic taken from the wavefile library
 * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js
 * USED BY @elevenlabs/client
 */

const decodeTable = [0, 132, 396, 924, 1980, 4092, 8316, 16764];

function decodeSample(muLawSample) {
  let sign;
  let exponent;
  let mantissa;
  let sample;
  muLawSample = ~muLawSample;
  sign = muLawSample & 0x80;
  exponent = (muLawSample >> 4) & 0x07;
  mantissa = muLawSample & 0x0f;
  sample = decodeTable[exponent] + (mantissa << (exponent + 3));
  if (sign !== 0) sample = -sample;

  return sample;
}

class AudioConcatProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffers = []; // Initialize an empty buffer
    this.cursor = 0;
    this.currentBuffer = null;
    this.wasInterrupted = false;
    this.finished = false;

    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.format = data.format;
          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
            globalThis.LibSampleRate.create(
              1,
              data.sampleRate,
              sampleRate
            ).then(resampler => {
              this.resampler = resampler;
            });
          }
          break;
        case "buffer":
          this.wasInterrupted = false;
          this.buffers.push(
            this.format === "ulaw"
              ? new Uint8Array(data.buffer)
              : new Int16Array(data.buffer)
          );
          break;
        case "interrupt":
          this.wasInterrupted = true;
          break;
        case "clearInterrupted":
          if (this.wasInterrupted) {
            this.wasInterrupted = false;
            this.buffers = [];
            this.currentBuffer = null;
          }
      }
    };
  }
  process(_, outputs) {
    let finished = false;
    const output = outputs[0][0];
    for (let i = 0; i < output.length; i++) {
      if (!this.currentBuffer) {
        if (this.buffers.length === 0) {
          finished = true;
          break;
        }
        this.currentBuffer = this.buffers.shift();
        if (this.resampler) {
          this.currentBuffer = this.resampler.full(this.currentBuffer);
        }
        this.cursor = 0;
      }

      let value = this.currentBuffer[this.cursor];
      if (this.format === "ulaw") {
        value = decodeSample(value);
      }
      output[i] = value / 32768;
      this.cursor++;

      if (this.cursor >= this.currentBuffer.length) {
        this.currentBuffer = null;
      }
    }

    if (this.finished !== finished) {
      this.finished = finished;
      this.port.postMessage({ type: "process", finished });
    }

    return true; // Continue processing
  }
}

registerProcessor("audioConcatProcessor", AudioConcatProcessor);
`);async function R(e,t){await e.audioWorklet.addModule(t||"https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js")}function F(e,t){let n,o;let a=e.frequencyBinCount;return{getVolume:()=>(n??=new Uint8Array(a),o??=new Uint8Array(a),e.getByteFrequencyData(n),E(n,o,t),function(e){if(0===e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t+=e[n]/255;return(t/=e.length)<0?0:t>1?1:t}(o)),getByteFrequencyData(o){n??=new Uint8Array(a),e.getByteFrequencyData(n),E(n,o,t)}}}function L(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}class U{context;analyser;gain;worklet;audioElement;static async create({sampleRate:e,format:t,outputDeviceId:n,workletPaths:o,libsampleratePath:a,audioContext:i}){let s=i??null,r=null;try{let i=navigator.mediaDevices.getSupportedConstraints().sampleRate;s||(s=new AudioContext(i?{sampleRate:e}:{}));let l=s.createAnalyser(),c=s.createGain();(r=new Audio).src="",r.load(),r.autoplay=!0,r.style.display="none",document.body.appendChild(r);let u=s.createMediaStreamDestination();r.srcObject=u.stream,c.connect(l),l.connect(u),i&&s.sampleRate===e||(s.sampleRate!==e&&console.warn(`[ConversationalAI] Sample rate ${e} not available, resampling to ${s.sampleRate}`),await R(s,a)),await P(s.audioWorklet,o?.audioConcatProcessor);let d=new AudioWorkletNode(s,"audioConcatProcessor");return d.port.postMessage({type:"setFormat",format:t,sampleRate:e}),d.connect(c),await s.resume(),!function({sampleRate:e,format:t,worklet:n,audioElement:o}){if(!L())return;let a=Math.floor(100*e/1e3),i="ulaw"===t?new Uint8Array(a).fill(255):new Int16Array(a);n.port.postMessage({type:"buffer",buffer:i.buffer}),o.play().catch(()=>{})}({sampleRate:e,format:t,worklet:d,audioElement:r}),n&&r.setSinkId&&await r.setSinkId(n),new U(s,l,c,d,r)}catch(e){throw r?.parentNode&&r.parentNode.removeChild(r),r?.pause(),s&&"closed"!==s.state&&await s.close(),e}}volume=1;interrupted=!1;interruptTimeout=null;volumeProvider;constructor(e,t,n,o,a){this.context=e,this.analyser=t,this.gain=n,this.worklet=o,this.audioElement=a,this.worklet.port.start(),this.volumeProvider=F(t,e.sampleRate)}getAnalyser(){return this.analyser}getVolume(){return this.volumeProvider.getVolume()}getByteFrequencyData(e){this.volumeProvider.getByteFrequencyData(e)}addListener(e){this.worklet.port.addEventListener("message",e)}removeListener(e){this.worklet.port.removeEventListener("message",e)}setVolume(e){this.volume=e,this.gain.gain.value=e}playAudio(e){this.gain.gain.cancelScheduledValues(this.context.currentTime),this.gain.gain.value=this.volume,this.interruptTimeout&&(clearTimeout(this.interruptTimeout),this.interruptTimeout=null),this.worklet.port.postMessage({type:"clearInterrupted"}),this.worklet.port.postMessage({type:"buffer",buffer:e})}interrupt(e=2e3){this.interrupted=!0,this.interruptTimeout&&(clearTimeout(this.interruptTimeout),this.interruptTimeout=null),this.worklet.port.postMessage({type:"interrupt"}),this.gain.gain.exponentialRampToValueAtTime(1e-4,this.context.currentTime+e/1e3),this.interruptTimeout=setTimeout(()=>{this.interrupted=!1,this.gain.gain.value=this.volume,this.worklet.port.postMessage({type:"clearInterrupted"}),this.interruptTimeout=null},e)}async setDevice(e){if(!("setSinkId"in HTMLAudioElement.prototype))throw Error("setSinkId is not supported in this browser");let t=e?.outputDeviceId;await this.audioElement.setSinkId(t||"")}async close(){this.interruptTimeout&&(clearTimeout(this.interruptTimeout),this.interruptTimeout=null),this.audioElement.parentNode&&this.audioElement.parentNode.removeChild(this.audioElement),this.audioElement.pause(),await this.context.close()}}let O=D("rawAudioProcessor",`/*
 * ulaw encoding logic taken from the wavefile library
 * https://github.com/rochars/wavefile/blob/master/lib/codecs/mulaw.js
 * USED BY @elevenlabs/client
 */

const BIAS = 0x84;
const CLIP = 32635;
const encodeTable = [
  0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
  4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
  7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
];

function encodeSample(sample) {
  let sign;
  let exponent;
  let mantissa;
  let muLawSample;
  sign = (sample >> 8) & 0x80;
  if (sign !== 0) sample = -sample;
  sample = sample + BIAS;
  if (sample > CLIP) sample = CLIP;
  exponent = encodeTable[(sample>>7) & 0xFF];
  mantissa = (sample >> (exponent+3)) & 0x0F;
  muLawSample = ~(sign | (exponent << 4) | mantissa);
  
  return muLawSample;
}

class RawAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
              
    this.port.onmessage = ({ data }) => {
      switch (data.type) {
        case "setFormat":
          this.isMuted = false;
          this.buffer = []; // Initialize an empty buffer
          const chunkDurationMs = data.chunkDurationMs ?? 25;
          this.bufferSize = Math.max(
            1,
            Math.round((data.sampleRate * chunkDurationMs) / 1000)
          );
          this.format = data.format;

          if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
            globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
              this.resampler = resampler;
            });
          }
          break;
        case "setMuted":
          this.isMuted = data.isMuted;
          break;
      }
    };
  }
  process(inputs) {
    if (!this.buffer) {
      return true;
    }
    
    const input = inputs[0]; // Get the first input node
    if (input.length > 0) {
      let channelData = input[0]; // Get the first channel's data

      // Resample the audio if necessary
      if (this.resampler) {
        channelData = this.resampler.full(channelData);
      }

      // Add channel data to the buffer
      this.buffer.push(...channelData);
      // Get max volume 
      let sum = 0.0;
      for (let i = 0; i < channelData.length; i++) {
        sum += channelData[i] * channelData[i];
      }
      const maxVolume = Math.sqrt(sum / channelData.length);
      // Check if buffer size has reached or exceeded the threshold
      if (this.buffer.length >= this.bufferSize) {
        const float32Array = this.isMuted 
          ? new Float32Array(this.buffer.length)
          : new Float32Array(this.buffer);

        let encodedArray = this.format === "ulaw"
          ? new Uint8Array(float32Array.length)
          : new Int16Array(float32Array.length);

        // Iterate through the Float32Array and convert each sample to PCM16
        for (let i = 0; i < float32Array.length; i++) {
          // Clamp the value to the range [-1, 1]
          let sample = Math.max(-1, Math.min(1, float32Array[i]));

          // Scale the sample to the range [-32768, 32767]
          let value = sample < 0 ? sample * 32768 : sample * 32767;
          if (this.format === "ulaw") {
            value = encodeSample(Math.round(value));
          }

          encodedArray[i] = value;
        }

        // Send the buffered data to the main script
        this.port.postMessage([encodedArray, maxVolume]);

        // Clear the buffer after sending
        this.buffer = [];
      }
    }
    return true; // Continue processing
  }
}
registerProcessor("rawAudioProcessor", RawAudioProcessor);
`),V={echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:{ideal:1}};class N{context;analyser;worklet;inputStream;mediaStreamSource;permissions;onError;static async create({sampleRate:e,format:t,preferHeadphonesForIosDevices:n,inputDeviceId:o,workletPaths:a,libsampleratePath:i,onError:s,inputChunkDurationMs:r=25}){let l=null,c=null;try{let u={sampleRate:{ideal:e},...V};if(L()&&n){let e=(await window.navigator.mediaDevices.enumerateDevices()).find(e=>"audioinput"===e.kind&&["airpod","headphone","earphone"].find(t=>e.label.toLowerCase().includes(t)));e&&(u.deviceId={ideal:e.deviceId})}o&&(u.deviceId=N.getDeviceIdConstraint(o));let d=navigator.mediaDevices.getSupportedConstraints().sampleRate,h=(l=new window.AudioContext(d?{sampleRate:e}:{})).createAnalyser();d||await R(l,i),await O(l.audioWorklet,a?.rawAudioProcessor);let p={voiceIsolation:!0,...u};c=await navigator.mediaDevices.getUserMedia({audio:p});let m=l.createMediaStreamSource(c),f=new AudioWorkletNode(l,"rawAudioProcessor");f.port.postMessage({type:"setFormat",format:t,sampleRate:e,chunkDurationMs:r}),m.connect(h),h.connect(f),await l.resume();let g=await navigator.permissions.query({name:"microphone"});return new N(l,h,f,c,m,g,s)}catch(e){throw c?.getTracks().forEach(e=>{e.stop()}),l?.close(),e}}static getDeviceIdConstraint(e){if(e)return L()?{ideal:e}:{exact:e}}muted=!1;volumeProvider;constructor(e,t,n,o,a,i,s=console.error){this.context=e,this.analyser=t,this.worklet=n,this.inputStream=o,this.mediaStreamSource=a,this.permissions=i,this.onError=s,this.permissions.addEventListener("change",this.handlePermissionsChange),this.worklet.port.start(),this.volumeProvider=F(t,e.sampleRate)}getAnalyser(){return this.analyser}getVolume(){return this.muted?0:this.volumeProvider.getVolume()}getByteFrequencyData(e){if(this.muted){e.fill(0);return}this.volumeProvider.getByteFrequencyData(e)}isMuted(){return this.muted}addListener(e){this.worklet.port.addEventListener("message",e)}removeListener(e){this.worklet.port.removeEventListener("message",e)}forgetInputStreamAndSource(){for(let e of this.inputStream.getTracks())e.stop();this.mediaStreamSource.disconnect()}async close(){this.forgetInputStreamAndSource(),this.permissions.removeEventListener("change",this.handlePermissionsChange),await this.context.close()}async setMuted(e){this.muted=e,this.worklet.port.postMessage({type:"setMuted",isMuted:e})}settingInput=!1;async setDevice(e){try{if(this.settingInput)throw Error("Input device is already being set");this.settingInput=!0;let t=e?.inputDeviceId,n={...V};t&&(n.deviceId=N.getDeviceIdConstraint(t));let o={voiceIsolation:!0,...n},a=await navigator.mediaDevices.getUserMedia({audio:o});this.forgetInputStreamAndSource(),this.inputStream=a,this.mediaStreamSource=this.context.createMediaStreamSource(a),this.mediaStreamSource.connect(this.analyser)}catch(e){throw this.onError("Failed to switch input device:",e),e}finally{this.settingInput=!1}}handlePermissionsChange=()=>{if("denied"===this.permissions.state)this.onError("Microphone permission denied");else if(!this.settingInput){let[e]=this.inputStream.getAudioTracks(),{deviceId:t}=e?.getSettings()??{};this.setDevice({inputDeviceId:t}).catch(e=>{this.onError("Failed to reset input device after permission change:",e)})}}}let q={default:0,android:3e3};function $(e,t="default"){let n=e??q;return"android"===t?n.android??n.default:"ios"===t?n.ios??n.default:n.default}async function B(e){e>0&&await new Promise(t=>setTimeout(t,e))}let j=["touchstart","touchend","click"],W=null,z=null,Q=!1;function Z(){z&&(clearTimeout(z),z=null)}function G(){W&&(W.close().catch(()=>{}),W=null,Z())}async function H(){if("wakeLock"in navigator)try{return await navigator.wakeLock.request("screen")}catch(e){}return null}async function J(e,t,n){let[o,a]=await Promise.all([N.create({...t.inputFormat,preferHeadphonesForIosDevices:e.preferHeadphonesForIosDevices,inputDeviceId:e.inputDeviceId,inputChunkDurationMs:e.inputChunkDurationMs,workletPaths:e.workletPaths,libsampleratePath:e.libsampleratePath}),U.create({...t.outputFormat,outputDeviceId:e.outputDeviceId,workletPaths:e.workletPaths,audioContext:n??void 0})]),i=function(e,t){let n=e=>{let n=e.data[0];t.sendMessage({user_audio_chunk:S(n.buffer)})};return e.addListener(n),()=>{e.removeListener(n)}}(o,t),s=function(e,t){let n=e=>{t.playAudio(function(e){let t=atob(e),n=t.length,o=new Uint8Array(n);for(let e=0;e<n;e++)o[e]=t.charCodeAt(e);return o.buffer}(e.audio_base_64))};return e.addListener(n),()=>{e.removeListener(n)}}(t,a);return{input:o,output:a,playbackEventTarget:a,detach:async()=>{i(),s()}}}a=async function(e){let t=e.useWakeLock??!0,n=null,o=null,a=null;try{let i;t&&(n=await H()),o=await navigator.mediaDevices.getUserMedia({audio:!0});let s=/android/i.test(navigator.userAgent)?"android":L()?"ios":"default";await B($(e.connectionDelay,s));let r=await x(e);try{r instanceof T?(a=function(){let e=W;return W=null,Z(),e}(),i={connection:r,...await J(e,r,a)},a=null):(G(),i=function(e){if(!(e instanceof M))throw Error(`setupWebRTCSession requires a WebRTCConnection. Received: ${e?.constructor?.name??typeof e}`);return{connection:e,input:e.input,output:e.output,playbackEventTarget:null,detach:async()=>{}}}(r))}catch(e){throw await a?.close().catch(()=>{}),a=null,r.close(),e}if(o){for(let e of o.getTracks())e.stop();o=null}let l=null;n&&(l=()=>{"visible"===document.visibilityState&&n?.released&&H().then(e=>{n=e})},document.addEventListener("visibilitychange",l));let c=i.detach;return{...i,detach:async()=>{await c(),l&&document.removeEventListener("visibilitychange",l);try{await n?.release(),n=null}catch(e){}}}}catch(e){if(o)for(let e of o.getTracks())e.stop();try{await n?.release(),n=null}catch(e){}throw G(),e}};class Y{audioElements=[];inputAudioContext=null;audioCaptureContext=null;async attachRemoteTrack(e,t){let n=e.attach();if(n.autoplay=!0,n.controls=!1,t&&n.setSinkId)try{await n.setSinkId(t)}catch(e){console.warn("Failed to set output device for new audio element:",e)}n.style.display="none",document.body.appendChild(n),this.audioElements.push(n)}setupInputAnalysis(e){this.inputAudioContext&&(this.inputAudioContext.close().catch(()=>{}),this.inputAudioContext=null);let t=new AudioContext,n=t.createAnalyser();return t.createMediaStreamSource(new MediaStream([e])).connect(n),this.inputAudioContext=t,{volumeProvider:F(n,t.sampleRate),analyser:n}}async setupOutputAnalysis(e,t,n){this.audioCaptureContext&&(this.audioCaptureContext.close().catch(()=>{}),this.audioCaptureContext=null);let o=new AudioContext;this.audioCaptureContext=o;let a=o.createAnalyser();a.fftSize=2048,a.smoothingTimeConstant=.8;let i=new MediaStream([e.mediaStreamTrack]),s=o.createMediaStreamSource(i),r=F(a,o.sampleRate);await O(o.audioWorklet);let l=new AudioWorkletNode(o,"rawAudioProcessor");return l.port.postMessage({type:"setFormat",format:t.format,sampleRate:t.sampleRate}),l.port.onmessage=e=>{let[t,o]=e.data;n(t.buffer,o)},s.connect(a),a.connect(l),{volumeProvider:r,analyser:a}}setVolume(e){for(let t of this.audioElements)t.volume=e}async setOutputDevice(e){if(!("setSinkId"in HTMLAudioElement.prototype))throw Error("setSinkId is not supported in this browser");await Promise.all(this.audioElements.map(async t=>{try{await t.setSinkId(e)}catch(e){throw console.error("Failed to set sink ID for audio element:",e),e}}))}cleanup(){for(let e of(this.inputAudioContext&&(this.inputAudioContext.close().catch(e=>{console.warn("Error closing input audio context:",e)}),this.inputAudioContext=null),this.audioCaptureContext&&(this.audioCaptureContext.close().catch(e=>{console.warn("Error closing audio capture context:",e)}),this.audioCaptureContext=null),this.audioElements))e.remove();this.audioElements=[]}}D("scribeAudioProcessor",`/*
 * Scribe Audio Processor for converting microphone audio to PCM16 format
 * Supports resampling for browsers like Firefox that don't support
 * AudioContext sample rate constraints.
 * USED BY @elevenlabs/client
 */

class ScribeAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.buffer = [];
    this.bufferSize = 4096; // Buffer size for optimal chunk transmission

    // Resampling state
    this.inputSampleRate = null;
    this.outputSampleRate = null;
    this.resampleRatio = 1;
    this.lastSample = 0;
    this.resampleAccumulator = 0;

    this.port.onmessage = ({ data }) => {
      if (data.type === "configure") {
        this.inputSampleRate = data.inputSampleRate;
        this.outputSampleRate = data.outputSampleRate;
        if (this.inputSampleRate && this.outputSampleRate) {
          this.resampleRatio = this.inputSampleRate / this.outputSampleRate;
        }
      }
    };
  }

  // Linear interpolation resampling
  resample(inputData) {
    if (this.resampleRatio === 1 || !this.inputSampleRate) {
      return inputData;
    }

    const outputSamples = [];

    for (let i = 0; i < inputData.length; i++) {
      const currentSample = inputData[i];

      // Generate output samples using linear interpolation
      while (this.resampleAccumulator < 1) {
        const interpolated =
          this.lastSample +
          (currentSample - this.lastSample) * this.resampleAccumulator;
        outputSamples.push(interpolated);
        this.resampleAccumulator += this.resampleRatio;
      }

      this.resampleAccumulator -= 1;
      this.lastSample = currentSample;
    }

    return new Float32Array(outputSamples);
  }

  process(inputs) {
    const input = inputs[0];
    if (input.length > 0) {
      let channelData = input[0]; // Get first channel (mono)

      // Resample if needed (for Firefox and other browsers that don't
      // support AudioContext sample rate constraints)
      if (this.resampleRatio !== 1) {
        channelData = this.resample(channelData);
      }

      // Add incoming audio to buffer
      for (let i = 0; i < channelData.length; i++) {
        this.buffer.push(channelData[i]);
      }

      // When buffer reaches threshold, convert and send
      if (this.buffer.length >= this.bufferSize) {
        const float32Array = new Float32Array(this.buffer);
        const int16Array = new Int16Array(float32Array.length);

        // Convert Float32 [-1, 1] to Int16 [-32768, 32767]
        for (let i = 0; i < float32Array.length; i++) {
          // Clamp the value to prevent overflow
          const sample = Math.max(-1, Math.min(1, float32Array[i]));
          // Scale to PCM16 range
          int16Array[i] = sample < 0 ? sample * 32768 : sample * 32767;
        }

        // Send to main thread as transferable ArrayBuffer
        this.port.postMessage(
          {
            audioData: int16Array.buffer
          },
          [int16Array.buffer]
        );

        // Clear buffer
        this.buffer = [];
      }
    }

    return true; // Continue processing
  }
}

registerProcessor("scribeAudioProcessor", ScribeAudioProcessor);

`);let X=new Uint8Array(0);class K extends d{type="text";setVolume(){throw Error("setVolume is not supported in text conversations")}setMicMuted(){throw Error("setMicMuted is not supported in text conversations")}getInputByteFrequencyData(){return X}getOutputByteFrequencyData(){return X}getInputVolume(){return 0}getOutputVolume(){return 0}static async startSession(e){let t=d.getFullOptions(e);t.onStatusChange&&t.onStatusChange({status:"connecting"}),t.onCanSendFeedbackChange&&t.onCanSendFeedbackChange({canSendFeedback:!1}),t.onModeChange&&t.onModeChange({mode:"listening"}),t.onCanSendFeedbackChange&&t.onCanSendFeedbackChange({canSendFeedback:!1});let n=null,o=null;try{return await B($(t.connectionDelay)),n=await x(t),o=new K(t,n),t.onConversationCreated?.(o),o.markConnected(),t.onConnect?.({conversationId:n.conversationId}),o}catch(e){throw o?await o.endSession().catch(()=>{}):(t.onStatusChange?.({status:"disconnected"}),n?.close()),e}}}class ee extends d{input;output;playbackEventTarget;cleanUp;type="voice";static async startSession(e){let t=d.getFullOptions(e);t.onStatusChange&&t.onStatusChange({status:"connecting"}),t.onCanSendFeedbackChange&&t.onCanSendFeedbackChange({canSendFeedback:!1});let n=null,o=null;try{if(!a)throw Error('No voice session setup strategy registered. Import the platform-specific entry point (e.g. @elevenlabs/client via the "browser" export).');return o=await a(t),n=new ee(t,o.connection,o.input,o.output,o.playbackEventTarget,o.detach),t.onConversationCreated?.(n),n.markConnected(),t.onConnect?.({conversationId:o.connection.conversationId}),n}catch(e){throw n?await n.endSession().catch(()=>{}):(o&&await o.detach().catch(()=>{}),t.onStatusChange?.({status:"disconnected"})),e}}inputFrequencyData;outputFrequencyData;handlePlaybackEvent=e=>{"process"===e.data.type&&this.updateMode(e.data.finished?"listening":"speaking")};constructor(e,t,n,o,a,i){super(e,t),this.input=n,this.output=o,this.playbackEventTarget=a,this.cleanUp=i,a?.addListener(this.handlePlaybackEvent)}async handleEndSession(){this.playbackEventTarget?.removeListener(this.handlePlaybackEvent),this.playbackEventTarget=null,await this.cleanUp(),await super.handleEndSession(),await this.input.close(),await this.output.close()}handleInterruption(e){super.handleInterruption(e),this.updateMode("listening"),this.output.interrupt()}handleAudio(e){super.handleAudio(e),e.audio_event.alignment&&this.options.onAudioAlignment&&this.options.onAudioAlignment(e.audio_event.alignment),this.lastInterruptTimestamp<=e.audio_event.event_id&&(e.audio_event.audio_base_64&&this.options.onAudio?.(e.audio_event.audio_base_64),this.currentEventId=e.audio_event.event_id,this.updateCanSendFeedback(),this.updateMode("speaking"))}static FREQUENCY_BIN_COUNT=1024;setMicMuted(e){this.input.setMuted(e).catch(e=>{this.options.onError?.("Failed to set input muted state",e)})}getInputByteFrequencyData(){return this.inputFrequencyData??=new Uint8Array(ee.FREQUENCY_BIN_COUNT),this.input.getByteFrequencyData(this.inputFrequencyData),this.inputFrequencyData}getOutputByteFrequencyData(){return this.outputFrequencyData??=new Uint8Array(ee.FREQUENCY_BIN_COUNT),this.output.getByteFrequencyData(this.outputFrequencyData),this.outputFrequencyData}getInputVolume(){return this.input.getVolume()}getOutputVolume(){return this.output.getVolume()}async changeInputDevice({sampleRate:e,format:t,preferHeadphonesForIosDevices:n,inputDeviceId:o}){try{await this.input.setDevice({inputDeviceId:o,sampleRate:e,format:t,preferHeadphonesForIosDevices:n})}catch(e){throw console.error("Error changing input device",e),e}}async changeOutputDevice({sampleRate:e,format:t,outputDeviceId:n}){try{await this.output.setDevice({outputDeviceId:n,sampleRate:e,format:t})}catch(e){throw console.error("Error changing output device",e),e}}setVolume=({volume:e})=>{let t=Number.isFinite(e)?Math.min(1,Math.max(0,e)):1;this.volume=t,this.output.setVolume(t)}}(f=y||(y={})).SESSION_STARTED="session_started",f.PARTIAL_TRANSCRIPT="partial_transcript",f.COMMITTED_TRANSCRIPT="committed_transcript",f.COMMITTED_TRANSCRIPT_WITH_TIMESTAMPS="committed_transcript_with_timestamps",f.AUTH_ERROR="auth_error",f.ERROR="error",f.OPEN="open",f.CLOSE="close",f.QUOTA_EXCEEDED="quota_exceeded",f.COMMIT_THROTTLED="commit_throttled",f.TRANSCRIBER_ERROR="transcriber_error",f.UNACCEPTED_TERMS="unaccepted_terms",f.RATE_LIMITED="rate_limited",f.INPUT_ERROR="input_error",f.QUEUE_OVERFLOW="queue_overflow",f.RESOURCE_EXHAUSTED="resource_exhausted",f.SESSION_TIME_LIMIT_EXCEEDED="session_time_limit_exceeded",f.CHUNK_SIZE_EXCEEDED="chunk_size_exceeded",f.INSUFFICIENT_AUDIO_ACTIVITY="insufficient_audio_activity",(g=C||(C={})).PCM_8000="pcm_8000",g.PCM_16000="pcm_16000",g.PCM_22050="pcm_22050",g.PCM_24000="pcm_24000",g.PCM_44100="pcm_44100",g.PCM_48000="pcm_48000",g.ULAW_8000="ulaw_8000",(v=w||(w={})).MANUAL="manual",v.VAD="vad";let et={startSession:async e=>(!function(){for(let e of["fetch","WebSocket","TextEncoder","TextDecoder","URL","btoa","atob"])if(void 0===globalThis[e])throw Error(`${e} is not available in this environment.`)}(),u(e)?K.startSession(e):ee.startSession(e))};!function(){if(!L()||Q||"undefined"==typeof document)return;Q=!0;let e=()=>{!function(){if(!L()||W)return;let e=new AudioContext;(function(e){let t=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0),e.resume().catch(()=>{})})(e),W=e,z&&clearTimeout(z),z=setTimeout(()=>{z=null,G()},3e4)}()};for(let t of j)document.addEventListener(t,e,!0)}(),o=()=>new Y;var en=n(2265),eo=n(7437);let ea=(0,en.createContext)(null);function ei(){let e=(0,en.useContext)(ea);return e?.conversation??null}function es(){let e=(0,en.useContext)(ea);if(!e)throw Error("useRawConversationRef must be used within a ConversationProvider");return e.conversationRef}function er(e){let t=(0,en.useContext)(ea);if(!t)throw Error("useRegisterCallbacks must be used within a ConversationProvider");let{registerCallbacks:n}=t,o=(0,en.useRef)(e),a=Object.keys(e).filter(t=>void 0!==e[t]).sort().join("|");(0,en.useLayoutEffect)(()=>{o.current=e}),(0,en.useLayoutEffect)(()=>n(Object.fromEntries((""===a?[]:a.split("|")).map(e=>[e,(...t)=>{let n=o.current[e];"function"==typeof n&&n(...t)}]))),[n,a])}let el=new Uint8Array(0),ec=(0,en.createContext)(null),eu=(0,en.createContext)(null),ed=(0,en.createContext)(null);function eh({children:e,isMuted:t,onMutedChange:n}){let o=ei(),a=es(),i="boolean"==typeof t,[s,r]=(0,en.useState)(!1),l=i?t:s;er({onDisconnect(){i||r(!1)}}),(0,en.useEffect)(()=>{i&&o&&o.setMicMuted(t)},[o,t,i]);let c=(0,en.useCallback)(e=>{let t=a.current;if(!t)throw Error("No active conversation. Call startSession() first.");i||(t.setMicMuted(e),r(e)),n?.(e)},[a,i,n]),u=(0,en.useMemo)(()=>({isMuted:l,setMuted:c}),[l,c]);return(0,eo.jsx)(ed.Provider,{value:u,children:e})}let ep=(0,en.createContext)(null),em=(0,en.createContext)(null),ef=(0,en.createContext)(null);class eg{listeners=new Set;add(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}invoke(...e){for(let t of this.listeners)t(...e)}get size(){return this.listeners.size}}class ev{sets=new Map;constructor(e){for(let t of e)this.sets.set(t,new eg)}register(e){let t=Object.entries(e).filter(([,e])=>void 0!==e).map(([e,t])=>{!function(e,t){if("function"!=typeof e)throw Error(`Expected function for key "${t}", got ${typeof e}`)}(t,e);let n=this.sets.get(e);if(!n)throw Error(`Unknown callback key "${e}"`);return n.add(t)});return()=>{for(let e of t)e()}}compose(){return Object.fromEntries(Array.from(this.sets.entries()).filter(([,e])=>e.size>0).map(([e,t])=>[e,(...e)=>{t.invoke(...e)}]))}}function ey(e){let t=(0,en.useRef)({}),n=l.filter(t=>void 0!==e[t]),o=n.join("|"),a=(0,en.useMemo)(()=>Object.fromEntries(n.map(e=>[e,(...n)=>{let o=t.current[e];o?.(...n)}])),[o]);for(let n of l)t.current[n]=e[n];return a}let eC=[function({children:e}){let t=(0,en.useContext)(ea);if(!t)throw Error("ConversationControlsProvider must be rendered inside a ConversationProvider");let{conversationRef:n}=t,o=(0,en.useCallback)(()=>{let e=n.current;if(!e)throw Error("No active conversation. Call startSession() first.");return e},[n]),a=(0,en.useCallback)(e=>{o().sendUserMessage(e)},[o]),i=(0,en.useCallback)(e=>{o().sendMultimodalMessage(e)},[o]),s=(0,en.useCallback)(e=>o().uploadFile(e),[o]),r=(0,en.useCallback)((e,t)=>{o().sendContextualUpdate(e,t)},[o]),l=(0,en.useCallback)(()=>{o().sendUserActivity()},[o]),c=(0,en.useCallback)((e,t)=>{o().sendMCPToolApprovalResult(e,t)},[o]),u=(0,en.useCallback)(e=>{o().setVolume(e)},[o]),d=(0,en.useCallback)(async e=>{let t=o();if(t instanceof ee)return await t.changeInputDevice(e);throw Error("Device switching is only available for voice conversations")},[o]),h=(0,en.useCallback)(async e=>{let t=o();if(t instanceof ee)return await t.changeOutputDevice(e);throw Error("Device switching is only available for voice conversations")},[o]),p=(0,en.useCallback)(()=>n.current?.getInputByteFrequencyData()??el,[n]),m=(0,en.useCallback)(()=>n.current?.getOutputByteFrequencyData()??el,[n]),f=(0,en.useCallback)(()=>n.current?.getInputVolume()??0,[n]),g=(0,en.useCallback)(()=>n.current?.getOutputVolume()??0,[n]),v=(0,en.useCallback)(()=>o().getId(),[o]),y=(0,en.useMemo)(()=>({startSession:t.startSession,endSession:t.endSession,sendUserMessage:a,sendMultimodalMessage:i,uploadFile:s,sendContextualUpdate:r,sendUserActivity:l,sendMCPToolApprovalResult:c,setVolume:u,changeInputDevice:d,changeOutputDevice:h,getInputByteFrequencyData:p,getOutputByteFrequencyData:m,getInputVolume:f,getOutputVolume:g,getId:v}),[t.startSession,t.endSession,a,i,s,r,l,c,u,d,h,p,m,f,g,v]);return(0,eo.jsx)(ec.Provider,{value:y,children:e})},function({children:e}){let[t,n]=(0,en.useState)("disconnected"),[o,a]=(0,en.useState)(void 0);er({onStatusChange({status:e}){"disconnecting"!==e&&(n(e),a(void 0))},onError(e){n("error"),a(e)}});let i=(0,en.useMemo)(()=>({status:t,message:o}),[t,o]);return(0,eo.jsx)(eu.Provider,{value:i,children:e})},function({children:e}){let[t,n]=(0,en.useState)("listening");er({onModeChange({mode:e}){n(e)},onDisconnect(){n("listening")}});let o=(0,en.useMemo)(()=>({mode:t,isSpeaking:"speaking"===t,isListening:"listening"===t}),[t]);return(0,eo.jsx)(ep.Provider,{value:o,children:e})},function({children:e}){let t=es(),[n,o]=(0,en.useState)(!1);er({onCanSendFeedbackChange({canSendFeedback:e}){o(e)},onDisconnect(){o(!1)}});let a=(0,en.useCallback)(e=>{t.current?.sendFeedback(e)},[t]),i=(0,en.useMemo)(()=>({canSendFeedback:n,sendFeedback:a}),[n,a]);return(0,eo.jsx)(em.Provider,{value:i,children:e})},function({children:e}){let t=(0,en.useContext)(ea);if(!t)throw Error("ConversationClientToolsProvider must be rendered inside a ConversationProvider");let{clientToolsRegistry:n,clientToolsRef:o}=t,a=(0,en.useCallback)((e,t)=>{if(n.has(e))throw Error(`Client tool "${e}" is already registered by another hook. Each tool name must be unique.`);return n.set(e,t),o.current[e]=t,()=>{n.get(e)===t&&n.delete(e),o.current[e]===t&&delete o.current[e]}},[n,o]);return(0,eo.jsx)(ef.Provider,{value:a,children:e})}];function ew({children:e,isMuted:t,onMutedChange:n,...o}){let a=(0,en.useRef)(null),s=(0,en.useRef)(null),r=(0,en.useRef)(0),c=(0,en.useRef)(!1),[u]=(0,en.useState)(()=>new Map),d=(0,en.useRef)({}),h=(0,en.useRef)(o);h.current=o;let[p]=(0,en.useState)(()=>new ev(l)),[m,f]=(0,en.useState)(null),g=ey(o),v=(0,en.useCallback)(e=>p.register(e),[p]);(0,en.useLayoutEffect)(()=>p.register({onDisconnect:()=>{a.current=null,f(null)}}),[p]);let y=(0,en.useCallback)(e=>{if(a.current||s.current)return;c.current=!1;let t=++r.current,n=h.current,o=function(e="us"){switch(e){case"eu-residency":case"in-residency":case"us":case"global":return e;default:return console.warn(`[ElevenAgents] Invalid server-location: ${e}. Defaulting to "us"`),"us"}}(e?.serverLocation||n?.serverLocation),m={...n};for(let e of l)delete m[e];let v=function(...e){return function e(...t){return t.reduce((t,n)=>{let o={...t};for(let t of Object.keys(n)){let a=o[t],s=n[t];i(a)&&i(s)?o[t]=e(a,s):"function"==typeof a&&"function"==typeof s?o[t]=(...e)=>{a(...e),s(...e)}:void 0!==s&&(o[t]=s)}return o},{})}(...e)}({livekitUrl:{us:"wss://livekit.rtc.elevenlabs.io","eu-residency":"wss://livekit.rtc.eu.residency.elevenlabs.io","in-residency":"wss://livekit.rtc.in.residency.elevenlabs.io",global:"wss://livekit.rtc.elevenlabs.io"}[o]},m,g,p.compose(),e??{},{origin:{us:"wss://api.elevenlabs.io","eu-residency":"wss://api.eu.residency.elevenlabs.io","in-residency":"wss://api.in.residency.elevenlabs.io",global:"wss://api.elevenlabs.io"}[o]}),y=function(e,t){let n={...e};for(let[e,o]of t){if(Object.hasOwn(n,e))throw Error(`Client tool "${e}" is already provided via props/options. Remove it from props or do not register it with useConversationClientTool.`);n[e]=o}return n}(v.clientTools,u);d.current=y,v.clientTools=y;let C=v.onConversationCreated,w=()=>t!==r.current,_={...v,onConversationCreated:e=>{c.current||w()||(a.current=e,f(e),C?.(e))},onConnect:e=>{c.current||w()||(s.current=null,v.onConnect?.(e))}};s.current=et.startSession(_),s.current.then(e=>{if(!w()){if(c.current){e.endSession(),s.current=null;return}a.current!==e&&(a.current=e,f(e)),s.current=null}},e=>{if(w()||(a.current=null,f(null),s.current=null,c.current))return;let t=e instanceof Error?e.message:"Session failed to start";v.onError?.(t,e)})},[g,p,u,d]),C=(0,en.useCallback)(()=>{c.current=!0;let e=s.current,t=a.current;a.current=null,f(null),e?e.then(e=>e.endSession(),()=>{}):t?.endSession()},[]);(0,en.useEffect)(()=>()=>{c.current=!0,s.current?s.current.then(e=>e.endSession(),()=>{}):a.current?.endSession()},[]);let w=(0,en.useMemo)(()=>({conversation:m,conversationRef:a,startSession:y,endSession:C,registerCallbacks:v,clientToolsRegistry:u,clientToolsRef:d}),[m,a,y,C,v,u,d]),_=eC.reduceRight((e,t)=>(0,eo.jsx)(t,{children:e}),(0,eo.jsx)(eh,{isMuted:t,onMutedChange:n,children:e}));return(0,eo.jsx)(ea.Provider,{value:w,children:_})}function e_(e={}){let{micMuted:t,volume:n,...o}=e;er(ey(o));let a=(0,en.useRef)(o);a.current=o;let i=function(){let e=(0,en.useContext)(ec);if(!e)throw Error("useConversationControls must be used within a ConversationProvider");return e}(),{status:s,message:r}=function(){let e=(0,en.useContext)(eu);if(!e)throw Error("useConversationStatus must be used within a ConversationProvider");return e}(),{isMuted:c,setMuted:u}=function(){let e=(0,en.useContext)(ed);if(!e)throw Error("useConversationInput must be used within a ConversationProvider");return e}(),{mode:d,isSpeaking:h,isListening:p}=function(){let e=(0,en.useContext)(ep);if(!e)throw Error("useConversationMode must be used within a ConversationProvider");return e}(),{canSendFeedback:m,sendFeedback:f}=function(){let e=(0,en.useContext)(em);if(!e)throw Error("useConversationFeedback must be used within a ConversationProvider");return e}(),g=(0,en.useCallback)(e=>{let t={...a.current};for(let e of l)delete t[e];i.startSession({...t,...e})},[i,a]),v=ei();return(0,en.useEffect)(()=>{void 0!==t&&v&&u(t)},[t,v,u]),(0,en.useEffect)(()=>{void 0!==n&&v&&v.setVolume({volume:n})},[n,v]),{...i,startSession:g,status:s,message:r,isMuted:t??c,setMuted:u,mode:d,isSpeaking:h,isListening:p,canSendFeedback:m,sendFeedback:f}}h=Object.freeze({name:"react_sdk",version:"1.7.0"})}}]);