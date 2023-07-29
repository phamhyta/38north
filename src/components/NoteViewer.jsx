import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

const NoteViewer = () => {
  const editorRef = useRef(null);
  return (
    <div>
      <Editor
        apiKey="vm845uqtrdnvn6en1bganv4pc0xisu5rum30g34d4nna7n21"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<header>
        <h1 class="page-header">The New York Times and the Human Torpedo &ndash; A Close Second Place</h1>
        <ul class="post__meta list-inline">
        <li class="meta--authors">BY:&nbsp;<a class="author url fn" title="Posts by 38 North" href="https://www.38north.org/author/38-north/" rel="author">38 NORTH</a></li>
        <li class="meta--date">MAY 2, 2010</li>
        <li class="meta--topics"><a href="https://www.38north.org/topics/mediabusters/" rel="category tag">MEDIABUSTERS</a></li>
        </ul>
        </header>
        <section>
        <div class="social-share-container no-print">
        <ul class="social-share affix-bottom">
        <li class="facebook"><a title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.38north.org%2F2010%2F05%2Fthe-new-york-times-and-the-human-torpedo-a-close-second-place%2F" target="_blank" rel="noopener" data-open-window="" data-win-width="900" data-win-height="550"><span class="sr-only">Facebook</span></a></li>
        <li class="twitter"><a class="social-popup" title="Share on Twitter" href="https://twitter.com/intent/tweet?text=&amp;url=https%3A%2F%2Fwww.38north.org%2F2010%2F05%2Fthe-new-york-times-and-the-human-torpedo-a-close-second-place%2F" target="_blank" rel="noopener" data-open-window="" data-win-width="550" data-win-height="420"><span class="sr-only">Twitter</span></a></li>
        <li class="email"><a title="Share via Email" href="mailto:?subject=You+might+like+this+article+by+38+North&amp;body=https://www.38north.org/2010/05/the-new-york-times-and-the-human-torpedo-a-close-second-place/" target="_blank" rel="noopener" data-open-window="" data-win-width="900" data-win-height="550"><span class="sr-only">Email</span></a></li>
        <li class="print"><a title="Print this Page" href="https://www.38north.org/2010/05/the-new-york-times-and-the-human-torpedo-a-close-second-place/"><span class="sr-only">Print</span></a></li>
        </ul>
        </div>
        <p><img class="alignnone size-full wp-image-578" title="down" src="https://www.38north.org/wp-content/uploads/2010/05/down.jpg" alt="" width="63" height="62"><img class="alignnone size-full wp-image-578" title="down" src="https://www.38north.org/wp-content/uploads/2010/05/down.jpg" alt="" width="63" height="62"><img class="alignnone size-full wp-image-578" title="down" src="https://www.38north.org/wp-content/uploads/2010/05/down.jpg" alt="" width="63" height="62"></p>
        <p>The runner-up for the monthly bad reporting award is:&nbsp;the<em>&nbsp;New York Times</em>&nbsp;and the Human Torpedo.</p>
        <p>Afghanistan and Iraq have absorbed so much of the American media&rsquo;s attention that it appears to have all but forgotten about the Korean peninsula. With more than 28,000 American troops based in South Korea, a mutual defense treaty with Seoul and the hope of resuming serious nuclear talks with North Korea, the United States has a direct stake in developments in the region.&nbsp; So it is striking that the sinking of a South Korean ship under mysterious circumstances has recently been cast as largely a local story by some major news organizations; one that they don&rsquo;t seem to think warrants including sources beyond local media.<br>&nbsp;<br>Recently, the&nbsp;<em>New York Times</em>&nbsp;carried two articles on the episode. The first, &ldquo;<a href="http://www.nytimes.com/2010/04/23/world/asia/23korea.html">South Korean Navy Was Warned of a Human Torpedo</a>,&rdquo; (April 22, 2010) repeated a report in the&nbsp;<em>Chosun Ilbo</em>, South Korea&rsquo;s most prominent conservative newspaper, that the Navy was warned of an attack months before the explosion that ripped the&nbsp;<em>Cheonan</em>&nbsp;in half. The&nbsp;<em>New York Times</em>&nbsp;then ran a second story, &ldquo;<a href="http://www.nytimes.com/2010/04/26/world/asia/26korea.html">Ship Attack Shows South Korean Quandary Over How to Respond to North</a>,&rdquo; (April 26, 2010) that repeated the charge of a torpedo attack (human or not) made on the April 25, 2010 by South Korea&rsquo;s defense minister and which explored the ramifications for Seoul&rsquo;s dealings with Pyongyang.<br>&nbsp;<br>These charges&mdash;even the speculation about a human torpedo&mdash;may prove to be true. No one is disputing that. But what is baffling is why the&nbsp;<em>Times</em>, like Reuters and AP, have chosen to elevate a story TO GLOBAL NEWS based solely on local reporting (with its own ideological agenda). As one of 38 North&rsquo;s journalist friends remarked, &ldquo;If I was the foreign editor of a major American newspaper, I would have asked my Pentagon and CIA reporters to pulse their sources on background and also see if they could get any sort of comment on the record. The same also goes for sources in the White House and the State Department. Apart from the policy stakes, the Director of National Intelligence, retired admiral Dennis C. Blair, is the former head of the Pacific Command.&rdquo;<br>&nbsp;<br>No doubt the matter is a considerable concern to all of them and a long list of obvious questions needs to be asked. Do American government experts believe North Korea torpedoed the&nbsp;<em>Cheonan</em>? Does the United States have any evidence on that matter, one way or the other? Are there different assessments among American specialists on what might have happened? Did the North Koreans have naval assets or submarines in the area when the explosion occurred? Or is it too early in the investigation to say? What action is the Obama administration taking behind the scenes to discourage an escalation of tensions? What are the implications for American policy and the White House&rsquo;s hope of pursuing nuclear talks with the North if the allegation turns out to be true&mdash;or if the South Koreans believe it is the most plausible explanation?<br>&nbsp;<br>Even beyond sources in the U.S., this story obviously has important implications for countries in Northeast Asia, such as China and Japan. The&nbsp;<em>Times</em>&nbsp;has bureaus in all of these places but doesn&rsquo;t seem to have bothered asking. The American media has the means to report complicated stories from different vantage points and put them into perspective, as is EVIDENT from its recent coverage of events in Afghanistan, Pakistan and Iraq. When will the media mobilize its resources to provide comprehensive coverage of the brewing security crisis in Korea?</p>
        <p><strong>Rating: 3 Thumbs-down</strong></p>
        </section>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </div>
  );
};

export default NoteViewer;
