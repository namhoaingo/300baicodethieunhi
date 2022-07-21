// See https://aka.ms/new-console-template for more information
using ObserverDesignPattern;
using ObserverDesignPattern.Observers;

Console.WriteLine("Hello, World!");

var videoData = new VideoData();

var emailNotifier = new EmailNotifier(videoData);
var youTubeNotifier = new YouTubeNotifier(videoData);
var phoneNotifier = new PhoneNotifier(videoData);


videoData.Title = "New Title ";


// remove youtune
videoData.DeleteObserver(youTubeNotifier);

videoData.Title = "New Title No Youtube";