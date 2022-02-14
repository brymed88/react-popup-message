<h1>React Popup Component</h2>

<p>
The purpose of this project is to provide a simple popup notication using React components. To learn more about components see <a href="https://reactjs.org/docs/components-and-props.html">Components & Props - Reactjs.org</a>
</p>

<p>There are two files that must be included for the component to function properly.
<ol>
<li>PopupComponent.js</li>
<li>popup.css/popup.min.css</li>
</ol>
</p>

<p>
Once the above files are included in the folder structure, import the component in each page or top level component where it is required.

<pre>
<code> 
import './popup.css';
import PopupComponent from './PopupComponent'; 
</code>
</pre>

</p>

<p>Then initiate the component</p>

<p> Error notification
<pre>
<code>
 &lt;PopupComponent
      title="Custom Error Message"
      body="Some error related text" 
      type="error"
    /&gt;
</code>
</pre>
</p>

<p> Warning notification
<pre>
<code>
 &lt;PopupComponent
      title="Custom Warning Message"
      body="Some warning related text" 
      type="warning"
    /&gt; 
</code>
</pre>
</p>

<p> Notification
<pre>
<code>
 &lt;PopupComponent
      title="Custom Notification Message"
      body="Some notification related text" 
      type="notification"
    /&gt;
</code>
</pre>
</p>

<p> Success notification
<pre>
<code>
 &lt;PopupComponent
      title="Custom Success Message"
      body="Some success related text" 
      type="success"
    /&gt;
</code>
</pre>
</p>

<p> <h2>Screenshots</h2>
<img src="./screenshots/error.png" width="300px">
<img src="./screenshots/warning.png" width="300px">
<img src="./screenshots/notification.png" width="300px">
<img src="./screenshots/success.png" width="300px">
</p>