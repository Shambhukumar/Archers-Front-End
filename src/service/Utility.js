export const UploadDate = () => {
    let t = new Date();
    function format(m) {
      let f = new Intl.DateTimeFormat('en', m);
      return f.format(t);
    }
    let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
    return a.map(format).join("-");
  }

  export const daybuy=()=>{
    // var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    var prnDt =  new Date().toLocaleTimeString('en-us', options);
    const d = prnDt.split(",")
    d.pop()
    
    return d.join(",");
  }