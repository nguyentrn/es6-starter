import axios from "axios";

const request = async (params) => {
  const res = await axios.get(`https://www.foody.vn/ho-chi-minh/dia-diem`, {
    params: {
      ds: "Restaurant",
      ar: params.area,
      page: params.page || 1,
      provinceId: params.provinceId,
      categoryId: params.categoryId || "",
      vt: "row",
      st: 1,
      append: true,
    },
    headers: {
      Cookie:
        "bc-jcb=1; flg=vn; floc=217; gcat=food; FOODY.AUTH.UDID=dc302945-fdb1-49c9-bb09-b1eaaf5916b9; FOODY.AUTH=8F6D45286EBE9317754A89FC61775C35EABC01D020B962058E4D37B0A05DC06B342D600749BE173BDA814BDB02E3034F050B1D1A88225BE981E441F7A7B47A3D96F8E4D9563CFA12CB01A72911E2983C7A42BFA909F5B28CD306F2FB5F9EC98C43088506B9319F72787BB49266374453C13987FB2229F256BE1C141125B8A11D2AA2C097D451D2FEB95B474321569AF53730C0CD1AA57C0863E188D2BBB291D5E52206EECDA499692D7332898E25ED676FD06C5D206C3DCD6279C09EF28D5CBDF6206E206CB4027D780F0B19D79F32534CCACED39AA60101B1378AA81BAD45B54C144BBAF973A83A51E4CC283F522E95; fbm_395614663835338=base_domain=.foody.vn; __ondemand_sessionid=2ydvnb0ahebp2bxwtsfqz3mj; fd.verify.password.27019510=23/03/2022; fd.keys=#sao#Xa%cc%80m; fd.res.view.217=291087,239871,161520,126893,595,168402,251108,169646,999827,44716,634552; fbsr_395614663835338=y3pd7m2jkuIwMpCNsttdSZwKyJ_L-N5pn1ChdBOiT64.eyJ1c2VyX2lkIjoiMTQ4NzUwMzE4ODIyOTE5OSIsImNvZGUiOiJBUUNKa29EbDR5M2Q3eUZKTXhXNmcxUXpWMldfN2hDNkxPZ0ZPMExHdXc4VFU2VldBSjBLT09kOUh0VG5FcG1JWEFDMlBRVm0yTXNtaVl5XzdDd1A2X0g4cG5EcjlFX0VEOXdlNGJ6VEtpM2xJaktZSFB0TF9YUFRINDMwaHM0LTdOY3ZndFlJcGxjb2pSU29qYlhCVDdveXlwSV9ScnBGZU5WQUlGV05Idk1QTjhRU0N0eTdYbnE5ajJkZU8teXh4RDE2QVpzRWE0S1JFTTBjOThIdXBURDdyUWFwb0JjQWFNVFRkeGRuZGR5eGF0UmVNSXQtSzdFYU5TZFhTVTZlYkM4N1NmcExVLXpOMVJOX0tsb0J1dXNDUnZpY3dmU3B5Wl9wdEQ0WldLckhOMkZoZzBLWElSOGFiaS1kUEpQbWk3eDhRaFBwQzJ3QmpkZjF5VVprNTRjTSIsIm9hdXRoX3Rva2VuIjoiRUFBRm56emVCZnNvQkFLeE1YUERuQXZKQnI4MEg5aDhJeFVZeFJ6d1M1QlRuMFBpV2Y5dk96NG1lNkhxVjZnRG11OGRLMFc3RVFMbFl3YXhWUjJaQjhyeFpBSVdqdDVMbkVRUUdrNUllWkNYZ0Z3NTBpbkJPbDN6Z29Ga1pCcmZpOWhGUkpiWkJpTXZzOHhQVlpBc0ZWUlk4Mk1GZVl1YXZXSmNobENjeEtaQkJxMEdNSzJPRVpDMHhBRk9wMmRoR1FqTnRvR1RoSW9wZW5CbFJrc1pBRWs3bFQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY0ODA0NzY5NH0; fbsr_395614663835338=0OPOWGmXOYoE-ZSH9EWlVuxgO5gzlqKX73RuP0li-1A.eyJ1c2VyX2lkIjoiMTQ4NzUwMzE4ODIyOTE5OSIsImNvZGUiOiJBUURpUWl1NUdlU2RLMy1DR0dmRVJsU1gweHFoTnpXc2E3c1BRLUhHQ2pOUFVyMDlRRU9Ub3Nsb2JpalczcGxTbzR6LVVWLTVMV3hrTXNmNmNpU2EtSWJHT204amdZaFVKWDV6VlZjTmxoa1FXcVdiTXNZSXQtLTNQbi1rN0xpeDc0MnFHODJpN0hid1RONEVHV3VHTkFNR3M0a1k5S1dzSFQteUZSWkE1Y25GN25wZGN3Tk90ZUlaSlBSNmFQMElxQWUwOVZ3QjlBMk5QMzcxX2o3ZlltS3E3WTJNanV0dmxlUm1sQWcwaTVXbEsyeXhMdjgwS01CWHpuN28wNzlnRk5nWlFvTk5HMUtMQ2syRWpDSl9qRlYtSFlrdEVoYkFlb3h6NzJRdzFNVmlzNGV0VzZmdDRrRWo0cnhsMlNhR2t1VlVJVGVXU19oRHl0a1VEaG9GWUlJcyIsIm9hdXRoX3Rva2VuIjoiRUFBRm56emVCZnNvQkFQV0FJaHdoSFJ0SUNpNERTWG9YeWJlOXRRaU5xRkJ5ejYyUHhHRGI0SkJHcU93bTNiYzVEQnE5ZnZEN01aQ3U0bTJURVI5UEVNZmRVWkJnaWhOU0hiRFY2eENkamo0RlhsZVpBZlFld3NNbkw4aXdON0x6YUgzdmdzbWNzNXd6NXZPTllHajVoVmtaQktzaEE1ckJoMGxGWW5QR2pRaVlPMEVSc0FuTk03bTlDYjFubFhnNVlFUUFXSzdLa1lpZHRMYWk0QkdaQyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjQ4MDQ5MTYyfQ",
      "X-Foody-User-Token":
        "SkdgAFgnMGjM70IK66XVdGHGqgL0hmXtdJGoOKR7nD18B65YlakyHexgWJJx",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  return res.data;
};

export default request;
