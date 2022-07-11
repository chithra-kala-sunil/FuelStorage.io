#import "RCTReactOneCustomMethod.h"

@implementation RCTReactOneCustomMethod

// To export a module named ReactOneCustomMethod
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getPhoneID:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceName = [[UIDevice currentDevice] name];
  resolve(deviceName);
}

RCT_EXPORT_METHOD(getPhoneType:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
//  NSUUID *deviceID = [[UIDevice currentDevice] identifierForVendor];
  NSString *deviceType = [[UIDevice currentDevice] model];
  resolve(deviceType);
}

RCT_EXPORT_METHOD(getDeviceName:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getDeviceName = [[UIDevice currentDevice] localizedModel];
  resolve(getDeviceName);
}

RCT_EXPORT_METHOD(getDeviceModel:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getDeviceModel = [[UIDevice currentDevice] model];
  resolve(getDeviceModel);
}

RCT_EXPORT_METHOD(getSystemVersion:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getSystemVersion = [[UIDevice currentDevice] localizedModel];
  resolve(getSystemVersion);
}

RCT_EXPORT_METHOD(getSystemLocale:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getSystemLocale = [[UIDevice currentDevice] accessibilityLanguage];
  resolve(getSystemLocale);
}

RCT_EXPORT_METHOD(getBuildNumber:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getBuildNumber = [[UIDevice currentDevice] systemName ];
  resolve(getBuildNumber);
}

RCT_EXPORT_METHOD(getBundleId:(RCTPromiseResolveBlock)resolve :(RCTPromiseRejectBlock)reject)
{
  NSString *getBundleId = [[UIDevice currentDevice] model ];
  resolve(getBundleId);
}
@end
