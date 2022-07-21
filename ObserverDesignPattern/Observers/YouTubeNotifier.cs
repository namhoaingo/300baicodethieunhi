using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverDesignPattern.Observers
{
    public class YouTubeNotifier : ObserverNotification
    {
        public YouTubeNotifier(Subject subject)
        {
            this.subject = subject;
            this.subject.AttachObserver(this);
        }
        public override void NotifyObserver(Subject subject, object? arg)
        {
            if (subject is VideoData videoData)
            {
                Console.WriteLine($"Notify all subcribers via Youtube with new data Name {videoData.FileName} Description {videoData.Description} Title {videoData.Title}");
            }
        }
    }
}
