import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

   analyticsEnabled = true;

  constructor(private platform: Platform) {

    if (! this.platform.is('cordova')) {
      this.analyticsEnabled = false;
      console.log('[AnalyticsService] Cordova not found. Calls won\'t be made');
    }

  }

  public track(name: String, properties?: any, options?: any) {

    properties = properties || {};
    options = options || {};
    
    const data = [name, properties, options];

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'track', data);
    } else {
      console.log('[AnalyticsService] Track');
      console.log(data);
    }

  }

  public screen(name: String, properties?: any, options?: any) {

    properties = properties || {};
    options = options || {};

    const data = [name, properties, options];

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'screen', data);
    } else {
      console.log('[AnalyticsService] Screen');
      console.log(data);
    }

  }

  public identify(userId?: String, properties?: any, options?: any) {

    properties = properties || {};
    options = options || {};
    
    const data = [userId, properties, options];

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'identify', data);
    } else {
      console.log('[AnalyticsService] Identify');
      console.log(data);
    }

  }

  public alias(previousId: String, userId: String) {

    const data = [previousId, userId];

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'alias', data);
    } else {
      console.log('[AnalyticsService] Alias');
      console.log(data);
    }

  }

  public reset() {

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'reset', []);
    } else {
      console.log('[AnalyticsService] Reset');
    }

  }

  public flush() {

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'flush', []);
    } else {
      console.log('[AnalyticsService] Flush');
    }

  }

  /*
  *
  * iOS Only
  *
  */

  public enable() {

    if (this.analyticsEnabled && this.platform.is('ios')) {
      cordova.exec(null, null, 'SegmentPlugin', 'enable', []);
    } else {
      console.log('[AnalyticsService] Enable');
    }

  }

  public disable() {

    if (this.analyticsEnabled) {
      cordova.exec(null, null, 'SegmentPlugin', 'disable', []);
    } else {
      console.log('[AnalyticsService] Disable');
    }

  }

}
