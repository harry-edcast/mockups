(window.wpJsonpFlightsWidget=window.wpJsonpFlightsWidget||[]).push([[58],{Ypbz:function(e,t,_){var o=_("EP3Q"),i=o.System,n=o.VbrMode,r=(o.Float,o.ShortBlock,o.Util,o.Arrays,o.new_array_n),s=(o.new_byte,o.new_double,o.new_float),a=o.new_float_n,l=o.new_int,f=(o.new_int_n,o.assert);function d(){var e=_("LzGN"),t=_("rh+i"),o=d.FFTOFFSET,u=d.MPG_MD_MS_LR,m=null;this.psy=null;var p=null,c=null,T=null;this.setModules=function(e,t,_,o){m=e,this.psy=t,p=t,c=o,T=_};var b=new e;this.lame_encode_mp3_frame=function(e,_,y,M,S,H){var A,E=r([2,2]);E[0][0]=new t,E[0][1]=new t,E[1][0]=new t,E[1][1]=new t;var L,g=r([2,2]);g[0][0]=new t,g[0][1]=new t,g[1][0]=new t,g[1][1]=new t;var P,h,F,v=[null,null],w=e.internal_flags,x=a([2,4]),j=[.5,.5],B=[[0,0],[0,0]],R=[[0,0],[0,0]];if(v[0]=_,v[1]=y,0==w.lame_encode_frame_init&&function(e,t){var _,o,i=e.internal_flags;if(0==i.lame_encode_frame_init){var n,r,a=s(2014),l=s(2014);for(i.lame_encode_frame_init=1,n=0,r=0;n<286+576*(1+i.mode_gr);++n)n<576*i.mode_gr?(a[n]=0,2==i.channels_out&&(l[n]=0)):(a[n]=t[0][r],2==i.channels_out&&(l[n]=t[1][r]),++r);for(o=0;o<i.mode_gr;o++)for(_=0;_<i.channels_out;_++)i.l3_side.tt[o][_].block_type=d.SHORT_TYPE;b.mdct_sub48(i,a,l),f(576>=d.FFTOFFSET),f(i.mf_size>=d.BLKSIZE+e.framesize-d.FFTOFFSET),f(i.mf_size>=512+e.framesize-32)}}(e,v),w.padding=0,(w.slot_lag-=w.frac_SpF)<0&&(w.slot_lag+=e.out_samplerate,w.padding=1),0!=w.psymodel){var k=[null,null],D=0,O=l(2);for(F=0;F<w.mode_gr;F++){for(h=0;h<w.channels_out;h++)k[h]=v[h],D=576+576*F-d.FFTOFFSET;if(0!=(e.VBR==n.vbr_mtrh||e.VBR==n.vbr_mt?p.L3psycho_anal_vbr(e,k,D,F,E,g,B[F],R[F],x[F],O):p.L3psycho_anal_ns(e,k,D,F,E,g,B[F],R[F],x[F],O)))return-4;for(e.mode==MPEGMode.JOINT_STEREO&&(j[F]=x[F][2]+x[F][3],j[F]>0&&(j[F]=x[F][3]/j[F])),h=0;h<w.channels_out;h++){var Y=w.l3_side.tt[F][h];Y.block_type=O[h],Y.mixed_block_flag=0}}}else for(F=0;F<w.mode_gr;F++)for(h=0;h<w.channels_out;h++)w.l3_side.tt[F][h].block_type=d.NORM_TYPE,w.l3_side.tt[F][h].mixed_block_flag=0,R[F][h]=B[F][h]=700;if(function(e){var t,_;if(0!=e.ATH.useAdjust)if(_=e.loudness_sq[0][0],t=e.loudness_sq[1][0],2==e.channels_out?(_+=e.loudness_sq[0][1],t+=e.loudness_sq[1][1]):(_+=_,t+=t),2==e.mode_gr&&(_=Math.max(_,t)),_*=.5,(_*=e.ATH.aaSensitivityP)>.03125)e.ATH.adjust>=1?e.ATH.adjust=1:e.ATH.adjust<e.ATH.adjustLimit&&(e.ATH.adjust=e.ATH.adjustLimit),e.ATH.adjustLimit=1;else{var o=31.98*_+625e-6;e.ATH.adjust>=o?(e.ATH.adjust*=.075*o+.925,e.ATH.adjust<o&&(e.ATH.adjust=o)):e.ATH.adjustLimit>=o?e.ATH.adjust=o:e.ATH.adjust<e.ATH.adjustLimit&&(e.ATH.adjust=e.ATH.adjustLimit),e.ATH.adjustLimit=o}else e.ATH.adjust=1}(w),b.mdct_sub48(w,v[0],v[1]),w.mode_ext=d.MPG_MD_LR_LR,e.force_ms)w.mode_ext=d.MPG_MD_MS_LR;else if(e.mode==MPEGMode.JOINT_STEREO){var I=0,G=0;for(F=0;F<w.mode_gr;F++)for(h=0;h<w.channels_out;h++)I+=R[F][h],G+=B[F][h];if(I<=1*G){var z=w.l3_side.tt[0],K=w.l3_side.tt[w.mode_gr-1];z[0].block_type==z[1].block_type&&K[0].block_type==K[1].block_type&&(w.mode_ext=d.MPG_MD_MS_LR)}}if(w.mode_ext==u?(L=g,P=R):(L=E,P=B),e.analysis&&null!=w.pinfo)for(F=0;F<w.mode_gr;F++)for(h=0;h<w.channels_out;h++)w.pinfo.ms_ratio[F]=w.ms_ratio[F],w.pinfo.ms_ener_ratio[F]=j[F],w.pinfo.blocktype[F][h]=w.l3_side.tt[F][h].block_type,w.pinfo.pe[F][h]=P[F][h],i.arraycopy(w.l3_side.tt[F][h].xr,0,w.pinfo.xr[F][h],0,576),w.mode_ext==u&&(w.pinfo.ers[F][h]=w.pinfo.ers[F][h+2],i.arraycopy(w.pinfo.energy[F][h+2],0,w.pinfo.energy[F][h],0,w.pinfo.energy[F][h].length));if(e.VBR==n.vbr_off||e.VBR==n.vbr_abr){var N,V;for(N=0;N<18;N++)w.nsPsy.pefirbuf[N]=w.nsPsy.pefirbuf[N+1];for(V=0,F=0;F<w.mode_gr;F++)for(h=0;h<w.channels_out;h++)V+=P[F][h];for(w.nsPsy.pefirbuf[18]=V,V=w.nsPsy.pefirbuf[9],N=0;N<9;N++)V+=(w.nsPsy.pefirbuf[N]+w.nsPsy.pefirbuf[18-N])*d.fircoef[N];for(V=3350*w.mode_gr*w.channels_out/V,F=0;F<w.mode_gr;F++)for(h=0;h<w.channels_out;h++)P[F][h]*=V}if(w.iteration_loop.iteration_loop(e,P,j,L),m.format_bitstream(e),A=m.copy_buffer(w,M,S,H,1),e.bWriteVbrTag&&c.addVbrFrame(e),e.analysis&&null!=w.pinfo){for(h=0;h<w.channels_out;h++){var Z;for(Z=0;Z<o;Z++)w.pinfo.pcmdata[h][Z]=w.pinfo.pcmdata[h][Z+e.framesize];for(Z=o;Z<1600;Z++)w.pinfo.pcmdata[h][Z]=v[h][Z-o]}T.set_frame_pinfo(e,L)}return function(e){var t,_;for(f(0<=e.bitrate_index&&e.bitrate_index<16),f(0<=e.mode_ext&&e.mode_ext<4),e.bitrate_stereoMode_Hist[e.bitrate_index][4]++,e.bitrate_stereoMode_Hist[15][4]++,2==e.channels_out&&(e.bitrate_stereoMode_Hist[e.bitrate_index][e.mode_ext]++,e.bitrate_stereoMode_Hist[15][e.mode_ext]++),t=0;t<e.mode_gr;++t)for(_=0;_<e.channels_out;++_){var o=0|e.l3_side.tt[t][_].block_type;0!=e.l3_side.tt[t][_].mixed_block_flag&&(o=4),e.bitrate_blockType_Hist[e.bitrate_index][o]++,e.bitrate_blockType_Hist[e.bitrate_index][5]++,e.bitrate_blockType_Hist[15][o]++,e.bitrate_blockType_Hist[15][5]++}}(w),A}}d.ENCDELAY=576,d.POSTDELAY=1152,d.MDCTDELAY=48,d.FFTOFFSET=224+d.MDCTDELAY,d.DECDELAY=528,d.SBLIMIT=32,d.CBANDS=64,d.SBPSY_l=21,d.SBPSY_s=12,d.SBMAX_l=22,d.SBMAX_s=13,d.PSFB21=6,d.PSFB12=6,d.BLKSIZE=1024,d.HBLKSIZE=d.BLKSIZE/2+1,d.BLKSIZE_s=256,d.HBLKSIZE_s=d.BLKSIZE_s/2+1,d.NORM_TYPE=0,d.START_TYPE=1,d.SHORT_TYPE=2,d.STOP_TYPE=3,d.MPG_MD_LR_LR=0,d.MPG_MD_LR_I=1,d.MPG_MD_MS_LR=2,d.MPG_MD_MS_I=3,d.fircoef=[-.1039435,-.1892065,5*-.0432472,-.155915,3898045e-23,.0467745*5,.50455,.756825,.187098*5],e.exports=d}}]);