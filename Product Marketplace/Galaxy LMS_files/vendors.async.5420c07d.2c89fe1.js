(window.wpJsonpFlightsWidget=window.wpJsonpFlightsWidget||[]).push([[18],{hc1b:function(n,a,_){var s=_("agax"),o=_("EP3Q"),t=(o.System,o.VbrMode),e=o.Float,r=(o.ShortBlock,o.Util),f=(o.Arrays,o.new_array_n,o.new_byte,o.new_double,o.new_float),i=(o.new_float_n,o.new_int),l=(o.new_int_n,o.assert),c=_("Ypbz"),A=_("tQps"),h=_("L+xm");function M(){var n=null,a=null,_=null;this.setModules=function(s,o,t){n=s,a=o,_=t},this.IPOW20=function(n){return l(0<=n&&n<M.Q_MAX),v[n]};var o=M.IXMAX_VAL+2,p=M.Q_MAX,b=M.Q_MAX2;M.LARGE_BITS;this.nr_of_sfb_block=[[[6,5,5,5],[9,9,9,9],[6,9,9,9]],[[6,5,7,3],[9,9,12,6],[6,9,12,6]],[[11,10,0,0],[18,18,0,0],[15,18,0,0]],[[7,7,7,0],[12,12,12,0],[6,15,12,0]],[[6,6,6,3],[12,9,9,6],[6,12,9,6]],[[8,8,5,0],[15,12,9,0],[6,18,9,0]]];var u=[0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,3,2,0];this.pretab=u,this.sfBandIndex=[new s([0,6,12,18,24,30,36,44,54,66,80,96,116,140,168,200,238,284,336,396,464,522,576],[0,4,8,12,18,24,32,42,56,74,100,132,174,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,6,12,18,24,30,36,44,54,66,80,96,114,136,162,194,232,278,332,394,464,540,576],[0,4,8,12,18,26,36,48,62,80,104,136,180,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,6,12,18,24,30,36,44,54,66,80,96,116,140,168,200,238,284,336,396,464,522,576],[0,4,8,12,18,26,36,48,62,80,104,134,174,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,4,8,12,16,20,24,30,36,44,52,62,74,90,110,134,162,196,238,288,342,418,576],[0,4,8,12,16,22,30,40,52,66,84,106,136,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,4,8,12,16,20,24,30,36,42,50,60,72,88,106,128,156,190,230,276,330,384,576],[0,4,8,12,16,22,28,38,50,64,80,100,126,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,4,8,12,16,20,24,30,36,44,54,66,82,102,126,156,194,240,296,364,448,550,576],[0,4,8,12,16,22,30,42,58,78,104,138,180,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,6,12,18,24,30,36,44,54,66,80,96,116,140,168,200,238,284,336,396,464,522,576],[0,4,8,12,18,26,36,48,62,80,104,134,174,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,6,12,18,24,30,36,44,54,66,80,96,116,140,168,200,238,284,336,396,464,522,576],[0,4,8,12,18,26,36,48,62,80,104,134,174,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]),new s([0,12,24,36,48,60,72,88,108,132,160,192,232,280,336,400,476,566,568,570,572,574,576],[0,8,16,24,36,52,72,96,124,160,162,164,166,192],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0])];var S=f(p+b+1),v=f(p),d=f(o),E=f(o);function m(n,a){var s=_.ATHformula(a,n);return s-=100,s=Math.pow(10,s/10+n.ATHlower)}function w(n){this.s=n}this.adj43=E,this.iteration_init=function(a){var _,s=a.internal_flags,t=s.l3_side;if(0==s.iteration_init_init){for(s.iteration_init_init=1,t.main_data_begin=0,function(n){for(var a=n.internal_flags.ATH.l,_=n.internal_flags.ATH.psfb21,s=n.internal_flags.ATH.s,o=n.internal_flags.ATH.psfb12,t=n.internal_flags,r=n.out_samplerate,f=0;f<c.SBMAX_l;f++){var i=t.scalefac_band.l[f],l=t.scalefac_band.l[f+1];a[f]=e.MAX_VALUE;for(var A=i;A<l;A++){var h=m(n,A*r/1152);a[f]=Math.min(a[f],h)}}for(f=0;f<c.PSFB21;f++){i=t.scalefac_band.psfb21[f],l=t.scalefac_band.psfb21[f+1];_[f]=e.MAX_VALUE;for(A=i;A<l;A++){h=m(n,A*r/1152);_[f]=Math.min(_[f],h)}}for(f=0;f<c.SBMAX_s;f++){i=t.scalefac_band.s[f],l=t.scalefac_band.s[f+1];s[f]=e.MAX_VALUE;for(A=i;A<l;A++){h=m(n,A*r/384);s[f]=Math.min(s[f],h)}s[f]*=t.scalefac_band.s[f+1]-t.scalefac_band.s[f]}for(f=0;f<c.PSFB12;f++){i=t.scalefac_band.psfb12[f],l=t.scalefac_band.psfb12[f+1];o[f]=e.MAX_VALUE;for(A=i;A<l;A++){h=m(n,A*r/384);o[f]=Math.min(o[f],h)}o[f]*=t.scalefac_band.s[13]-t.scalefac_band.s[12]}if(n.noATH){for(f=0;f<c.SBMAX_l;f++)a[f]=1e-20;for(f=0;f<c.PSFB21;f++)_[f]=1e-20;for(f=0;f<c.SBMAX_s;f++)s[f]=1e-20;for(f=0;f<c.PSFB12;f++)o[f]=1e-20}t.ATH.floor=10*Math.log10(m(n,-1))}(a),d[0]=0,_=1;_<o;_++)d[_]=Math.pow(_,4/3);for(_=0;_<o-1;_++)E[_]=_+1-Math.pow(.5*(d[_]+d[_+1]),.75);for(E[_]=.5,_=0;_<p;_++)v[_]=Math.pow(2,-.1875*(_-210));for(_=0;_<=p+b;_++)S[_]=Math.pow(2,.25*(_-210-b));var r,f,i,l;for(n.huffman_init(s),(_=a.exp_nspsytune>>2&63)>=32&&(_-=64),r=Math.pow(10,_/4/10),(_=a.exp_nspsytune>>8&63)>=32&&(_-=64),f=Math.pow(10,_/4/10),(_=a.exp_nspsytune>>14&63)>=32&&(_-=64),i=Math.pow(10,_/4/10),(_=a.exp_nspsytune>>20&63)>=32&&(_-=64),l=i*Math.pow(10,_/4/10),_=0;_<c.SBMAX_l;_++){A=_<=6?r:_<=13?f:_<=20?i:l,s.nsPsy.longfact[_]=A}for(_=0;_<c.SBMAX_s;_++){var A;A=_<=5?r:_<=10?f:_<=11?i:l,s.nsPsy.shortfact[_]=A}}},this.on_pe=function(n,_,s,o,t,e){var r,f,c=n.internal_flags,M=0,p=i(2),b=new A(M),u=a.ResvMaxBits(n,o,b,e),S=(M=b.bits)+u;for(S>h.MAX_BITS_PER_GRANULE&&(S=h.MAX_BITS_PER_GRANULE),r=0,f=0;f<c.channels_out;++f)s[f]=Math.min(h.MAX_BITS_PER_CHANNEL,M/c.channels_out),p[f]=0|s[f]*_[t][f]/700-s[f],p[f]>3*o/4&&(p[f]=3*o/4),p[f]<0&&(p[f]=0),p[f]+s[f]>h.MAX_BITS_PER_CHANNEL&&(p[f]=Math.max(0,h.MAX_BITS_PER_CHANNEL-s[f])),r+=p[f];if(r>u)for(f=0;f<c.channels_out;++f)p[f]=u*p[f]/r;for(f=0;f<c.channels_out;++f)s[f]+=p[f],u-=p[f];for(r=0,f=0;f<c.channels_out;++f)r+=s[f];if(r>h.MAX_BITS_PER_GRANULE){var v=0;for(f=0;f<c.channels_out;++f)s[f]*=h.MAX_BITS_PER_GRANULE,s[f]/=r,v+=s[f];l(v<=h.MAX_BITS_PER_GRANULE)}return S},this.reduce_side=function(n,a,_,s){l(s<=h.MAX_BITS_PER_GRANULE),l(n[0]+n[1]<=h.MAX_BITS_PER_GRANULE);var o=.33*(.5-a)/.5;o<0&&(o=0),o>.5&&(o=.5);var t=0|.5*o*(n[0]+n[1]);t>h.MAX_BITS_PER_CHANNEL-n[0]&&(t=h.MAX_BITS_PER_CHANNEL-n[0]),t<0&&(t=0),n[1]>=125&&(n[1]-t>125?(n[0]<_&&(n[0]+=t),n[1]-=t):(n[0]+=n[1]-125,n[1]=125)),(t=n[0]+n[1])>s&&(n[0]=s*n[0]/t,n[1]=s*n[1]/t),l(n[0]<=h.MAX_BITS_PER_CHANNEL),l(n[1]<=h.MAX_BITS_PER_CHANNEL),l(n[0]+n[1]<=h.MAX_BITS_PER_GRANULE)},this.athAdjust=function(n,a,_){var s=90.30873362,o=r.FAST_LOG10_X(a,10),t=n*n,e=0;return o-=_,t>1e-20&&(e=1+r.FAST_LOG10_X(t,10/s)),e<0&&(e=0),o*=e,o+=_+s-94.82444863,Math.pow(10,.1*o)},this.calc_xmin=function(n,a,_,s){var o,e=0,r=n.internal_flags,f=0,i=0,l=r.ATH,A=_.xr,h=n.VBR==t.vbr_mtrh?1:0,M=r.masking_lower;for(n.VBR!=t.vbr_mtrh&&n.VBR!=t.vbr_mt||(M=1),o=0;o<_.psy_lmax;o++){m=(E=n.VBR==t.vbr_rh||n.VBR==t.vbr_mtrh?athAdjust(l.adjust,l.l[o],l.floor):l.adjust*l.l[o])/(S=_.width[o]),w=2220446049250313e-31,X=S>>1,x=0;do{x+=g=A[f]*A[f],w+=g<m?g:m,x+=L=A[++f]*A[f],w+=L<m?L:m,f++}while(--X>0);if(x>E&&i++,o==c.SBPSY_l)w<(T=E*r.nsPsy.longfact[o])&&(w=T);if(0!=h&&(E=w),!n.ATHonly)if((B=a.en.l[o])>0)T=x*a.thm.l[o]*M/B,0!=h&&(T*=r.nsPsy.longfact[o]),E<T&&(E=T);s[e++]=0!=h?E:E*r.nsPsy.longfact[o]}var p=575;if(_.block_type!=c.SHORT_TYPE)for(var b=576;0!=b--&&BitStream.EQ(A[b],0);)p=b;_.max_nonzero_coeff=p;for(var u=_.sfb_smin;o<_.psymax;u++,o+=3){var S,v,d;for(d=n.VBR==t.vbr_rh||n.VBR==t.vbr_mtrh?athAdjust(l.adjust,l.s[u],l.floor):l.adjust*l.s[u],S=_.width[o],v=0;v<3;v++){var E,m,w,B,T,x=0,X=S>>1;m=d/S,w=2220446049250313e-31;do{var g,L;x+=g=A[f]*A[f],w+=g<m?g:m,x+=L=A[++f]*A[f],w+=L<m?L:m,f++}while(--X>0);if(x>d&&i++,u==c.SBPSY_s)w<(T=d*r.nsPsy.shortfact[u])&&(w=T);if(E=0!=h?w:d,!n.ATHonly&&!n.ATHshort)if((B=a.en.s[u][v])>0)T=x*a.thm.s[u][v]*M/B,0!=h&&(T*=r.nsPsy.shortfact[u]),E<T&&(E=T);s[e++]=0!=h?E:E*r.nsPsy.shortfact[u]}n.useTemporal&&(s[e-3]>s[e-3+1]&&(s[e-3+1]+=(s[e-3]-s[e-3+1])*r.decay),s[e-3+1]>s[e-3+2]&&(s[e-3+2]+=(s[e-3+1]-s[e-3+2])*r.decay))}return i},this.calc_noise_core=function(n,a,_,s){var o=0,t=a.s,e=n.l3_enc;if(t>n.count1)for(;0!=_--;){i=n.xr[t],t++,o+=i*i,i=n.xr[t],t++,o+=i*i}else if(t>n.big_values){var r=f(2);for(r[0]=0,r[1]=s;0!=_--;){i=Math.abs(n.xr[t])-r[e[t]],t++,o+=i*i,i=Math.abs(n.xr[t])-r[e[t]],t++,o+=i*i}}else for(;0!=_--;){var i;i=Math.abs(n.xr[t])-d[e[t]]*s,t++,o+=i*i,i=Math.abs(n.xr[t])-d[e[t]]*s,t++,o+=i*i}return a.s=t,o},this.calc_noise=function(n,a,_,s,o){var t,e,f,i=0,c=0,A=0,h=0,p=0,b=-20,v=0,d=n.scalefac,E=0;for(s.over_SSD=0,t=0;t<n.psymax;t++){var m,B=n.global_gain-(d[E++]+(0!=n.preflag?u[t]:0)<<n.scalefac_scale+1)-8*n.subblock_gain[n.window[t]],T=0;if(null!=o&&o.step[t]==B)T=o.noise[t],v+=n.width[t],_[i++]=T/a[c++],T=o.noise_log[t];else{var x,X=(l(0<=(f=B)+M.Q_MAX2&&f<M.Q_MAX),S[f+M.Q_MAX2]);if(e=n.width[t]>>1,v+n.width[t]>n.max_nonzero_coeff)e=(x=n.max_nonzero_coeff-v+1)>0?x>>1:0;var g=new w(v);T=this.calc_noise_core(n,g,e,X),v=g.s,null!=o&&(o.step[t]=B,o.noise[t]=T),T=_[i++]=T/a[c++],T=r.FAST_LOG10(Math.max(T,1e-20)),null!=o&&(o.noise_log[t]=T)}if(null!=o&&(o.global_gain=n.global_gain),p+=T,T>0)m=Math.max(0|10*T+.5,1),s.over_SSD+=m*m,A++,h+=T;b=Math.max(b,T)}return s.over_count=A,s.tot_noise=p,s.over_noise=h,s.max_noise=b,A},this.set_pinfo=function(n,a,_,s,o){var t,e,r,i,A,h=n.internal_flags,M=0==a.scalefac_scale?.5:1,p=a.scalefac,b=f(L3Side.SFBMAX),S=f(L3Side.SFBMAX),v=new CalcNoiseResult;calc_xmin(n,_,a,b),calc_noise(a,b,S,v,null);var d=0;for(e=a.sfb_lmax,a.block_type!=c.SHORT_TYPE&&0==a.mixed_block_flag&&(e=22),t=0;t<e;t++){var E=h.scalefac_band.l[t],m=(w=h.scalefac_band.l[t+1])-E;for(i=0;d<w;d++)i+=a.xr[d]*a.xr[d];i/=m,A=1e15,h.pinfo.en[s][o][t]=A*i,h.pinfo.xfsf[s][o][t]=A*b[t]*S[t]/m,_.en.l[t]>0&&!n.ATHonly?i/=_.en.l[t]:i=0,h.pinfo.thr[s][o][t]=A*Math.max(i*_.thm.l[t],h.ATH.l[t]),h.pinfo.LAMEsfb[s][o][t]=0,0!=a.preflag&&t>=11&&(h.pinfo.LAMEsfb[s][o][t]=-M*u[t]),t<c.SBPSY_l&&(l(p[t]>=0),h.pinfo.LAMEsfb[s][o][t]-=M*p[t])}if(a.block_type==c.SHORT_TYPE)for(e=t,t=a.sfb_smin;t<c.SBMAX_s;t++){E=h.scalefac_band.s[t],m=(w=h.scalefac_band.s[t+1])-E;for(var w,B=0;B<3;B++){for(i=0,r=E;r<w;r++)i+=a.xr[d]*a.xr[d],d++;i=Math.max(i/m,1e-20),A=1e15,h.pinfo.en_s[s][o][3*t+B]=A*i,h.pinfo.xfsf_s[s][o][3*t+B]=A*b[e]*S[e]/m,_.en.s[t][B]>0?i/=_.en.s[t][B]:i=0,(n.ATHonly||n.ATHshort)&&(i=0),h.pinfo.thr_s[s][o][3*t+B]=A*Math.max(i*_.thm.s[t][B],h.ATH.s[t]),h.pinfo.LAMEsfb_s[s][o][3*t+B]=-2*a.subblock_gain[B],t<c.SBPSY_s&&(h.pinfo.LAMEsfb_s[s][o][3*t+B]-=M*p[e]),e++}}h.pinfo.LAMEqss[s][o]=a.global_gain,h.pinfo.LAMEmainbits[s][o]=a.part2_3_length+a.part2_length,h.pinfo.LAMEsfbits[s][o]=a.part2_length,h.pinfo.over[s][o]=v.over_count,h.pinfo.max_noise[s][o]=10*v.max_noise,h.pinfo.over_noise[s][o]=10*v.over_noise,h.pinfo.tot_noise[s][o]=10*v.tot_noise,h.pinfo.over_SSD[s][o]=v.over_SSD}}M.Q_MAX=257,M.Q_MAX2=116,M.LARGE_BITS=1e5,M.IXMAX_VAL=8206,n.exports=M}}]);