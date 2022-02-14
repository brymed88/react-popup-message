<h1>React Popup Component</h2>

<p>The purpose of this project is to provide a simple popup message using React components.</p>

<p>There are two files that must be included within your code
<ol>
<li>PopupComponent.js</li>
<li>popup.css/popup.min.css</li>
</ol>
</p>

<p>
Once the above files are included in the folder structure, import the component in each page or top level component.

<pre>
<code> import PopupComponent from './PopupComponent'; </code>
</pre>

</p>

<p>Then initiate the component</p>

<p> Error notification
<pre>
<code>
 <PopupComponent
      title="Custom Error Message"
      body="Some error related text" 
      type="error"
    />
</code>
</pre>
![](./screenshots/error.png)
</p>

<p> Warning notification
<pre>
<code>
 &lt; PopupComponent
      title="Custom Warning Message"
      body="Some warning related text" 
      type="warning"
    /&gt; 
</code>
</pre>
![](screenshots/warning.png)
</p>

<p> Notification
<pre>
<code>
 <PopupComponent
      title="Custom Notification Message"
      body="Some notification related text" 
      type="notification"
    />
</code>
</pre>
![](./screenshots/notification.png)
</p>

<p> Success notification
<pre>
<code>
 <PopupComponent
      title="Custom Success Message"
      body="Some success related text" 
      type="success"
    />
</code>
</pre>
![](./screenshots/success.png)
</p>