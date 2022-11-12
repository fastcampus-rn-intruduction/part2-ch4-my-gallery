import { AdMobRewarded } from "expo-ads-admob";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

const UNIT_ID = Platform.select({
  ios: __DEV__ ? "ca-app-pub-3940256099942544/1712485313" : "ca-app-pub-9311408839317713/7853377278",
  android: __DEV__ ? "ca-app-pub-3940256099942544/5224354917" : "ca-app-pub-9311408839317713/9209022670",
})

export const useRewardAd = () => {
  const [isLoaded, setIsLoaded] = useState(false); // 광고가 로딩이 됐는지
  const [isRewarded, setIsRewarded] = useState(false); // 보상을 받을 수 있는 상태까지 광고를 봤는지
  const [isClosed, setIsClosed] = useState(false); // 광고가 닫혔는지

  const loadRewardAd = async () => {
    await AdMobRewarded.setAdUnitID(UNIT_ID);
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();

    /**
     * 메모
     * https://github.com/expo/expo/issues/17536
     * - 현재 iOS에서는 두번째로 광고를 봐야 하는 상황에 광고를 볼 수 없는 오류가 있음.
     * -> 앱 종료 후 재실행 시 
     */
  }

  const resetAdValue = () => {
    setIsLoaded(false);
    setIsRewarded(false);
    setIsClosed(false);
  };

  useEffect(() => {
    AdMobRewarded.addEventListener('rewardedVideoDidLoad', () => {
      console.log('rewardedVideoDidLoad');
      setIsLoaded(true);
    });
    AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', () => {
      console.log('rewardedVideoUserDidEarnReward');
      setIsRewarded(true);
    });
    AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => {
      console.log('rewardedVideoDidDismiss');
      setIsClosed(true);
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  return {
    loadRewardAd,
    isLoaded,
    isRewarded,
    isClosed,
    resetAdValue,
  };
}