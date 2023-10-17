export const rewards = {
    success: true,
    response: {
        rewards: [
            {
				rewardId: 1,  //도전과제 자체의 id //유저의 도전과제 진행률 id가 아님
				rewardName: "네컷 인플루언서",
				description: "우리 그룹 사진의 좋아요가 1M개 이상이에요.",
				level: "LEVEL_BRONZE",
				goalCount: 10,  //도전과제 달성 기준
				count: 4, //유저가 해당 도전과제를 얼마나 달성했는지
				success: "Y" //or "Y" //유저가 해당 도전과제를 완료하지 못함
			},
            {
				rewardId: 2,  //도전과제 자체의 id //유저의 도전과제 진행률 id가 아님
				rewardName: "혼술? 아니 혼컷",
				description: "혼자만의 네컷을 기록해보세요.",
				level: "LEVEL_SILVER",
				goalCount: 10,  //도전과제 달성 기준
				count: 10, //유저가 해당 도전과제를 얼마나 달성했는지
				success: "Y" //or "Y" //유저가 해당 도전과제를 완료하지 못함
			},
            {
				rewardId: 3,  //도전과제 자체의 id //유저의 도전과제 진행률 id가 아님
				rewardName: "완벽한 초시계",
				description: "4컷 모두 동일한 포즈로 10번 촬영",
				level: "LEVEL_GOLD",
				goalCount: 10,  //도전과제 달성 기준
				count: 6, //유저가 해당 도전과제를 얼마나 달성했는지
				success: "N" //or "Y" //유저가 해당 도전과제를 완료하지 못함
			},
        ],
    },
    error: null,
};
