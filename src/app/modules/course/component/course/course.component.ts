import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(
    public service: CourseService
  ) { }

  ngOnInit() {
    this.service.getCourse().subscribe(res => console.log(res));
  }
}

// https://www.cbr.ru/currency_base/daily
// timestamp: 1584072001
// base: "USD"
// rates:
//   AED: 3.6732
// AFN: 76.137147
// ALL: 109.797459
// AMD: 483.730143
// ANG: 1.798182
// AOA: 498.1035
// ARS: 62.6965
// AUD: 1.589643
// AWG: 1.8
// AZN: 1.7025
// BAM: 1.738655
// BBD: 2
// BDT: 85.334958
// BGN: 1.74771
// BHD: 0.377163
// BIF: 1896.406305
// BMD: 1
// BND: 1.402692
// BOB: 6.911589
// BRL: 4.7916
// BSD: 1
// BTC: 0.00018822881
// BTN: 74.013567
// BWP: 11.38387
// BYN: 2.365783
// BZD: 2.024933
// CAD: 1.393594
// CDF: 1703.588651
// CHF: 0.943488
// CLF: 0.031379
// CLP: 852.801401
// CNH: 7.01996
// CNY: 7.0062
// COP: 3900.513216
// CRC: 569.293057
// CUC: 1
// CUP: 25.75
// CVE: 97.8
// CZK: 23.3985
// DJF: 178.05
// DKK: 6.66416
// DOP: 53.891847
// DZD: 120.127106
// EGP: 15.7036
// ERN: 14.999732
// ETB: 32.604363
// EUR: 0.891774
// FJD: 2.24625
// FKP: 0.796551
// GBP: 0.796551
// GEL: 2.795
// GGP: 0.796551
// GHS: 5.524694
// GIP: 0.796551
// GMD: 50.94
// GNF: 9582.625452
// GTQ: 7.651833
// GYD: 209.275392
// HKD: 7.77538
// HNL: 24.78088
// HRK: 6.781466
// HTG: 95.243587
// HUF: 301.9702
// IDR: 14982.5
// ILS: 3.68865
// IMP: 0.796551
// INR: 74.51749
// IQD: 1199.290162
// IRR: 42105
// ISK: 133.149999
// JEP: 0.796551
// JMD: 135.703086
// JOD: 0.709
// JPY: 104.94884211
// KES: 102.399247
// KGS: 71.353499
// KHR: 4103.173535
// KMF: 437.050015
// KPW: 900
// KRW: 1225.36
// KWD: 0.307681
// KYD: 0.837203
// KZT: 402.912399
// LAK: 8936.609245
// LBP: 1518.928806
// LKR: 183.912094
// LRD: 197.99997
// LSL: 16.393222
// LYD: 1.391376
// MAD: 9.562974
// MDL: 17.497903
// MGA: 3716.829791
// MKD: 55.082984
// MMK: 1396.35796
// MNT: 2757.408914
// MOP: 8.049992
// MRO: 357
// MRU: 37.794375
// MUR: 38.152387
// MVR: 15.45
// MWK: 738.903362
// MXN: 22.0464
// MYR: 4.295
// MZN: 65.78
// NAD: 16.5
// NGN: 365
// NIO: 33.889836
// NOK: 10.177348
// NPR: 119.086234
// NZD: 1.631357
// OMR: 0.384995
// PAB: 1
// PEN: 3.53375
// PGK: 3.437348
// PHP: 51.311233
// PKR: 160.078634
// PLN: 3.91335
// PYG: 6611.086245
// QAR: 3.639899
// RON: 4.3056
// RSD: 104.945
// RUB: 74.8018
// RWF: 956.193794
// SAR: 3.753638
// SBD: 8.302329
// SCR: 13.244378
// SDG: 55.25
// SEK: 9.749275
// SGD: 1.412569
// SHP: 0.796551
// SLL: 7602.999677
// SOS: 581.138609
// SRD: 7.458
// SSP: 130.26
// STD: 22052.77227
// STN: 21.85
// SVC: 8.790413
// SYP: 514.91941
// SZL: 16.421581
// THB: 32.07325
// TJS: 9.690042
// TMT: 3.51
// TND: 2.8415
// TOP: 2.321387
// TRY: 6.3159
// TTD: 6.792657
// TWD: 30.2655
// TZS: 2299.6
// UAH: 26.005248
// UGX: 3732.046156
// USD: 1
// UYU: 43.436807
// UZS: 9533.370248
// VEF: 248487.642241
// VES: 73541.975759
// VND: 23247.045871
// VUV: 118.847485
// WST: 2.682928
// XAF: 584.965578
// XAG: 0.06464323
// XAU: 0.00064095
// XCD: 2.70255
// XDR: 0.719572
// XOF: 584.965578
// XPD: 0.00054093
// XPF: 106.416978
// XPT: 0.00128705
// YER: 250.300035
// ZAR: 16.598511
// ZMW: 15.872269
// ZWL: 322.000001
