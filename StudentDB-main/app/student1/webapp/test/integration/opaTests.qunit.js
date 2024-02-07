sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'student1/test/integration/FirstJourney',
		'student1/test/integration/pages/StudentList',
		'student1/test/integration/pages/StudentObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentList, StudentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('student1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentList: StudentList,
					onTheStudentObjectPage: StudentObjectPage
                }
            },
            opaJourney.run
        );
    }
);