(window.wpJsonpFlightsWidget=window.wpJsonpFlightsWidget||[]).push([[19],{FJ20:function(e,a,t){var r=t("EP3Q"),n=r.System,s=r.VbrMode,i=(r.Float,r.ShortBlock),o=(r.Util,r.Arrays),l=(r.new_array_n,r.new_byte),_=(r.new_double,r.new_float,r.new_float_n,r.new_int,r.new_int_n,r.assert);function f(){var e,a,t;this.setModules=function(r,n,s){e=r,a=n,t=s};var r=f.NUMTOCENTRIES,b=f.MAXFRAMESIZE,u=r+4+4+4+4+4+9+1+1+8+1+1+3+1+1+2+4+2+2,c=[0,49345,49537,320,49921,960,640,49729,50689,1728,1920,51009,1280,50625,50305,1088,52225,3264,3456,52545,3840,53185,52865,3648,2560,51905,52097,2880,51457,2496,2176,51265,55297,6336,6528,55617,6912,56257,55937,6720,7680,57025,57217,8e3,56577,7616,7296,56385,5120,54465,54657,5440,55041,6080,5760,54849,53761,4800,4992,54081,4352,53697,53377,4160,61441,12480,12672,61761,13056,62401,62081,12864,13824,63169,63361,14144,62721,13760,13440,62529,15360,64705,64897,15680,65281,16320,16e3,65089,64001,15040,15232,64321,14592,63937,63617,14400,10240,59585,59777,10560,60161,11200,10880,59969,60929,11968,12160,61249,11520,60865,60545,11328,58369,9408,9600,58689,9984,59329,59009,9792,8704,58049,58241,9024,57601,8640,8320,57409,40961,24768,24960,41281,25344,41921,41601,25152,26112,42689,42881,26432,42241,26048,25728,42049,27648,44225,44417,27968,44801,28608,28288,44609,43521,27328,27520,43841,26880,43457,43137,26688,30720,47297,47489,31040,47873,31680,31360,47681,48641,32448,32640,48961,32e3,48577,48257,31808,46081,29888,30080,46401,30464,47041,46721,30272,29184,45761,45953,29504,45313,29120,28800,45121,20480,37057,37249,20800,37633,21440,21120,37441,38401,22208,22400,38721,21760,38337,38017,21568,39937,23744,23936,40257,24320,40897,40577,24128,23040,39617,39809,23360,39169,22976,22656,38977,34817,18624,18816,35137,19200,35777,35457,19008,19968,36545,36737,20288,36097,19904,19584,35905,17408,33985,34177,17728,34561,18368,18048,34369,33281,17088,17280,33601,16640,33217,32897,16448];function p(e,a){var t=255&e[a+0];return t<<=8,t|=255&e[a+1],t<<=8,t|=255&e[a+2],t<<=8,t|=255&e[a+3]}function g(e,a,t){e[a+0]=255&t>>24,e[a+1]=255&t>>16,e[a+2]=255&t>>8,e[a+3]=255&t}function h(e,a,t){e[a+0]=255&t>>8,e[a+1]=255&t}function m(e,a,t){return 255&(e<<a|t&~(-1<<a))}function d(a,t){var r=a.internal_flags;t[0]=m(t[0],8,255),t[1]=m(t[1],3,7),t[1]=m(t[1],1,a.out_samplerate<16e3?0:1),t[1]=m(t[1],1,a.version),t[1]=m(t[1],2,1),t[1]=m(t[1],1,a.error_protection?0:1),t[2]=m(t[2],4,r.bitrate_index),t[2]=m(t[2],2,r.samplerate_index),t[2]=m(t[2],1,0),t[2]=m(t[2],1,a.extension),t[3]=m(t[3],2,a.mode.ordinal()),t[3]=m(t[3],2,r.mode_ext),t[3]=m(t[3],1,a.copyright),t[3]=m(t[3],1,a.original),t[3]=m(t[3],2,a.emphasis),t[0]=255;var n,i,o=241&t[1];n=1==a.version?128:a.out_samplerate<16e3?32:64,a.VBR==s.vbr_off&&(n=a.brate),i=a.free_format?0:255&16*e.BitrateIndex(n,a.version,a.out_samplerate),1==a.version?(t[1]=255&(10|o),o=13&t[2],t[2]=255&(i|o)):(t[1]=255&(2|o),o=13&t[2],t[2]=255&(i|o))}function R(e,a){return a=a>>8^c[255&(a^e)]}this.addVbrFrame=function(e){var a=e.internal_flags,t=Tables.bitrate_table[e.version][a.bitrate_index];_(null!=a.VBR_seek_table.bag),function(e,a){if(e.nVbrNumFrames++,e.sum+=a,e.seen++,!(e.seen<e.want)&&(e.pos<e.size&&(e.bag[e.pos]=e.sum,e.pos++,e.seen=0),e.pos==e.size)){for(var t=1;t<e.size;t+=2)e.bag[t/2]=e.bag[t];e.want*=2,e.pos/=2}}(a.VBR_seek_table,t)},this.getVbrTag=function(e){var a=new VBRTagData,t=0;a.flags=0;var n=e[t+1]>>3&1,s=e[t+2]>>2&3,i=e[t+3]>>6&3,o=e[t+2]>>4&15;if(o=Tables.bitrate_table[n][o],e[t+1]>>4==14?a.samprate=Tables.samplerate_table[2][s]:a.samprate=Tables.samplerate_table[n][s],!function(e,a){return new String(e,a,"Xing".length(),null).equals("Xing")||new String(e,a,"Info".length(),null).equals("Info")}(e,t+=0!=n?3!=i?36:21:3!=i?21:13))return null;t+=4,a.hId=n;var l=a.flags=p(e,t);if(t+=4,0!=(1&l)&&(a.frames=p(e,t),t+=4),0!=(2&l)&&(a.bytes=p(e,t),t+=4),0!=(4&l)){if(null!=a.toc)for(var _=0;_<r;_++)a.toc[_]=e[t+_];t+=r}a.vbrScale=-1,0!=(8&l)&&(a.vbrScale=p(e,t),t+=4),a.headersize=72e3*(n+1)*o/a.samprate;var f=e[(t+=21)+0]<<4;f+=e[t+1]>>4;var b=(15&e[t+1])<<8;return(f<0||f>3e3)&&(f=-1),((b+=255&e[t+2])<0||b>3e3)&&(b=-1),a.encDelay=f,a.encPadding=b,a},this.InitVbrTag=function(e){var t,r=e.internal_flags;t=1==e.version?128:e.out_samplerate<16e3?32:64,e.VBR==s.vbr_off&&(t=e.brate);var n=72e3*(e.version+1)*t/e.out_samplerate,i=r.sideinfo_len+u;if(r.VBR_seek_table.TotalFrameSize=n,n<i||n>b)e.bWriteVbrTag=!1;else{r.VBR_seek_table.nVbrNumFrames=0,r.VBR_seek_table.nBytesWritten=0,r.VBR_seek_table.sum=0,r.VBR_seek_table.seen=0,r.VBR_seek_table.want=1,r.VBR_seek_table.pos=0,null==r.VBR_seek_table.bag&&(r.VBR_seek_table.bag=new int[400],r.VBR_seek_table.size=400);var o=l(b);d(e,o);for(var _=r.VBR_seek_table.TotalFrameSize,f=0;f<_;++f)a.add_dummy_byte(e,255&o[f],1)}},this.updateMusicCRC=function(e,a,t,r){for(var n=0;n<r;++n)e[0]=R(a[t+n],e[0])},this.getLameTagFrame=function(e,_){var f=e.internal_flags;if(!e.bWriteVbrTag)return 0;if(f.Class_ID!=Lame.LAME_ID)return 0;if(f.VBR_seek_table.pos<=0)return 0;if(_.length<f.VBR_seek_table.TotalFrameSize)return f.VBR_seek_table.TotalFrameSize;o.fill(_,0,f.VBR_seek_table.TotalFrameSize,0),d(e,_);var b=l(r);if(e.free_format)for(var u=1;u<r;++u)b[u]=255&255*u/100;else!function(e,a){if(!(e.pos<=0))for(var t=1;t<r;++t){var n=t/r,s=0|Math.floor(n*e.pos);s>e.pos-1&&(s=e.pos-1);var i=0|256*e.bag[s]/e.sum;i>255&&(i=255),a[t]=255&i}}(f.VBR_seek_table,b);var c=f.sideinfo_len;e.error_protection&&(c-=2),e.VBR==s.vbr_off?(_[c++]=255&"Info".charAt(0),_[c++]=255&"Info".charAt(1),_[c++]=255&"Info".charAt(2),_[c++]=255&"Info".charAt(3)):(_[c++]=255&"Xing".charAt(0),_[c++]=255&"Xing".charAt(1),_[c++]=255&"Xing".charAt(2),_[c++]=255&"Xing".charAt(3)),g(_,c,15),g(_,c+=4,f.VBR_seek_table.nVbrNumFrames),c+=4;var p=f.VBR_seek_table.nBytesWritten+f.VBR_seek_table.TotalFrameSize;g(_,c,0|p),c+=4,n.arraycopy(b,0,_,c,b.length),c+=b.length,e.error_protection&&a.CRC_writeheader(f,_);var m=0;for(u=0;u<c;u++)m=R(_[u],m);return c+=function(e,a,r,n,s){var o,l,_,f,b,u=e.internal_flags,c=0,p=e.encoder_delay,m=e.encoder_padding,d=100-10*e.VBR_q-e.quality,v=t.getLameVeryShortVersion(),V=[1,5,3,2,4,0,3],k=0|(e.lowpassfreq/100+.5>255?255:e.lowpassfreq/100+.5),B=0,T=0,w=e.internal_flags.noise_shaping,S=0,y=0,F=0,A=0!=(1&e.exp_nspsytune),I=0!=(2&e.exp_nspsytune),E=!1,M=!1,z=e.internal_flags.nogap_total,N=e.internal_flags.nogap_current,x=e.ATHtype;switch(e.VBR){case vbr_abr:b=e.VBR_mean_bitrate_kbps;break;case vbr_off:b=e.brate;break;default:b=e.VBR_min_bitrate_kbps}switch(o=0+(e.VBR.ordinal()<V.length?V[e.VBR.ordinal()]:0),u.findReplayGain&&(u.RadioGain>510&&(u.RadioGain=510),u.RadioGain<-510&&(u.RadioGain=-510),T=8192,T|=3072,u.RadioGain>=0?T|=u.RadioGain:(T|=512,T|=-u.RadioGain)),u.findPeakSample&&(B=Math.abs(0|u.PeakSample/32767*Math.pow(2,23)+.5)),-1!=z&&(N>0&&(M=!0),N<z-1&&(E=!0)),f=x+((A?1:0)<<4)+((I?1:0)<<5)+((E?1:0)<<6)+((M?1:0)<<7),d<0&&(d=0),e.mode){case MONO:S=0;break;case STEREO:S=1;break;case DUAL_CHANNEL:S=2;break;case JOINT_STEREO:S=e.force_ms?4:3;break;case NOT_SET:default:S=7}F=e.in_samplerate<=32e3?0:48e3==e.in_samplerate?2:e.in_samplerate>48e3?3:1,(e.short_blocks==i.short_block_forced||e.short_blocks==i.short_block_dispensed||-1==e.lowpassfreq&&-1==e.highpassfreq||e.scale_left<e.scale_right||e.scale_left>e.scale_right||e.disable_reservoir&&e.brate<320||e.noATH||e.ATHonly||0==x||e.in_samplerate<=32e3)&&(y=1),l=w+(S<<2)+(y<<5)+(F<<6),_=u.nMusicCRC,g(r,n+c,d),c+=4;for(var C=0;C<9;C++)r[n+c+C]=255&v.charAt(C);r[n+(c+=9)]=255&o,r[n+ ++c]=255&k,g(r,n+ ++c,B),h(r,n+(c+=4),T),h(r,n+(c+=2),0),r[n+(c+=2)]=255&f,r[n+ ++c]=b>=255?255:255&b,r[n+ ++c]=255&p>>4,r[n+c+1]=255&(p<<4)+(m>>8),r[n+c+2]=255&m,r[n+(c+=3)]=255&l,c++,r[n+c++]=0,h(r,n+c,e.preset),g(r,n+(c+=2),a),h(r,n+(c+=4),_),c+=2;for(var q=0;q<c;q++)s=R(r[n+q],s);return h(r,n+c,s),c+=2}(e,p,_,c,m),f.VBR_seek_table.TotalFrameSize},this.putVbrTag=function(e,a){if(e.internal_flags.VBR_seek_table.pos<=0)return-1;if(a.seek(a.length()),0==a.length())return-1;var t=function(e){e.seek(0);var a=l(10);return e.readFully(a),new String(a,"ISO-8859-1").startsWith("ID3")?0:((127&a[6])<<21|(127&a[7])<<14|(127&a[8])<<7|127&a[9])+a.length}(a);a.seek(t);var r=l(b),n=getLameTagFrame(e,r);return n>r.length?-1:(n<1||a.write(r,0,n),0)}}f.NUMTOCENTRIES=100,f.MAXFRAMESIZE=2880,e.exports=f},kqyt:function(e,a){e.exports=function(){this.setModules=function(e,a){e,a}}},"xV/0":function(e,a){e.exports=function(){this.sum=0,this.seen=0,this.want=0,this.pos=0,this.size=0,this.bag=null,this.nVbrNumFrames=0,this.nBytesWritten=0,this.TotalFrameSize=0}}}]);